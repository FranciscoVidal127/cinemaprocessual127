import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

interface PostMetadata {
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  tags?: string[];
  readTime?: string;
  origem?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

function calculateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 220);
  return `${minutes} min`;
}

function parseMarkdownPost(content: string, filename: string) {
  const metadataMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!metadataMatch) {
    console.log(`Skipping ${filename}: no frontmatter found`);
    return null;
  }

  const metadataText = metadataMatch[1];
  const contentText = metadataMatch[2];

  const meta: any = {};
  metadataText.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      const key = match[1];
      let value = match[2].replace(/^["']|["']$/g, '');

      if (key === 'tags') {
        const tagsArray = value.replace(/^\[|\]$/g, '').split(',').map((t: string) => t.trim().replace(/^["']|["']$/g, ''));
        meta[key] = tagsArray;
      } else {
        meta[key] = value;
      }
    }
  });

  if (!meta.readTime) {
    meta.readTime = calculateReadTime(contentText);
  }

  const slug = filename.replace('.md', '');

  const excerpt = meta.subtitle || contentText
    .split('\n')
    .filter(line => line.trim() && !line.startsWith('#') && !line.startsWith('*'))
    .slice(0, 3)
    .join(' ')
    .substring(0, 200) + '...';

  return {
    title: meta.title || 'Untitled',
    category: meta.category || 'Escrita',
    date: meta.date || '',
    read_time: meta.readTime || '',
    excerpt: excerpt,
    slug: slug,
    tags: meta.tags || [],
    origem: meta.origem || 'por Francisco Vidal',
    content: contentText
  };
}

async function backupPosts() {
  const postsDir = path.join(process.cwd(), 'public', 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

  console.log(`Found ${files.length} markdown files`);

  for (const file of files) {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const post = parseMarkdownPost(content, file);

    if (!post) continue;

    console.log(`Backing up: ${post.title} (${post.slug})`);

    const { data, error } = await supabase
      .from('posts')
      .upsert({
        ...post,
        tags: JSON.stringify(post.tags)
      }, {
        onConflict: 'slug'
      });

    if (error) {
      console.error(`Error backing up ${file}:`, error);
    } else {
      console.log(`✓ Successfully backed up: ${post.slug}`);
    }
  }

  console.log('\nBackup complete!');
}

backupPosts().catch(console.error);
