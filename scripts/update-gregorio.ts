import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function updatePost() {
  const filePath = path.join(process.cwd(), 'public/posts/entrevista-gregorio-gananian-filme-livre.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    throw new Error('Frontmatter not found');
  }

  const content = fileContent.substring(frontmatterMatch[0].length).trim();
  
  const { data, error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'entrevista-gregorio-gananian-filme-livre')
    .select();

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Post updated successfully:', data);
  }
}

updatePost();
