import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function renumberImages() {
  const { data: post } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .maybeSingle();

  if (!post) {
    console.log('Post not found');
    return;
  }

  let content = post.content;

  // Map old image numbers to new ones
  // Missing: 7-22 (16 images)
  // We have: 2-6, 23-46
  // New sequence should be: 2-6 (5 images), then 23-46 becomes 7-30 (24 images)

  // First, replace 23-46 with temporary placeholders to avoid conflicts
  for (let i = 46; i >= 23; i--) {
    const newNum = i - 16; // 46 -> 30, 23 -> 7
    content = content.replace(
      new RegExp(`/images/Akerbrenez${i}\\.png`, 'g'),
      `/images/TEMP${newNum}.png`
    );
  }

  // Then replace TEMP back to Akerbrenez
  content = content.replace(/\/images\/TEMP(\d+)\.png/g, '/images/Akerbrenez$1.png');

  console.log('Updated image references:');
  console.log('- Akerbrenez23-46 → Akerbrenez7-30');
  console.log('- Akerbrenez2-6 remain unchanged');

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (error) {
    console.error('Error updating post:', error);
  } else {
    console.log('\n✅ Successfully renumbered all image references!');
  }
}

renumberImages();
