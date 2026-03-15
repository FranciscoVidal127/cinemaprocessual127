import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function dumpAllPosts() {
  const backupDir = path.join(process.cwd(), 'backup-db-posts');
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

  const { data: posts, error } = await supabase
    .from('posts')
    .select('slug, title, category, date, excerpt, content, created_at')
    .order('created_at');

  if (error) {
    console.error('Error fetching posts:', error);
    process.exit(1);
  }

  console.log(`Dumping ${posts.length} posts...`);

  for (const post of posts) {
    const filename = `${post.slug}.md`;
    const filePath = path.join(backupDir, filename);

    const frontmatter = `---
slug: ${post.slug}
title: "${post.title.replace(/"/g, '\\"')}"
category: ${post.category}
date: "${post.date}"
excerpt: "${post.excerpt.replace(/"/g, '\\"')}"
created_at: ${post.created_at}
---

`;

    fs.writeFileSync(filePath, frontmatter + (post.content || ''), 'utf-8');
    console.log(`✓ ${post.slug}`);
  }

  console.log(`\nAll ${posts.length} posts dumped to ./backup-db-posts/`);
}

dumpAllPosts().catch(console.error);
