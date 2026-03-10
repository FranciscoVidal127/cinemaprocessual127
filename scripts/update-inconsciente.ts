import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function updatePost() {
  const filePath = path.join(process.cwd(), 'public/posts/inconsciente-maquinico.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const metadataMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!metadataMatch) {
    console.error('No metadata found');
    return;
  }

  const contentText = metadataMatch[2];

  const { data, error } = await supabase
    .from('posts')
    .update({
      content: contentText
    })
    .eq('slug', 'inconsciente-maquinico')
    .select();

  if (error) {
    console.error('Error updating post:', error);
  } else {
    console.log('Post updated successfully:', data);
  }
}

updatePost();
