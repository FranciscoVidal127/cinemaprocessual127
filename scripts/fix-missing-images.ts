import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function fixMissingImages() {
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

  // Remove all image references from 7 to 46 (they don't exist or are corrupted)
  // Keep only references to Akerbrenez2.png through Akerbrenez6.png

  for (let i = 7; i <= 46; i++) {
    // Remove the entire figure block for missing images
    const figureRegex = new RegExp(
      `<figure className="essay-editorial-inline">\\s*<div className="essay-editorial-frame">\\s*<img\\s+src="/images/Akerbrenez${i}\\.png"[^>]*>\\s*</div>\\s*</figure>`,
      'g'
    );
    content = content.replace(figureRegex, '');
  }

  console.log('Removed references to Akerbrenez7-46');

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (error) {
    console.error('Error updating post:', error);
  } else {
    console.log('\n✅ Successfully removed missing image references!');
    console.log('Remaining images: Akerbrenez2-6 (5 images)');
  }
}

fixMissingImages();
