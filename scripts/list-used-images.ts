import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function listUsedImages() {
  const { data: post } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .maybeSingle();

  if (!post) {
    console.log('Post not found');
    return;
  }

  const content = post.content;
  const imageMatches = content.match(/\/images\/Akerbrenez\d+\.png/g);

  if (imageMatches) {
    const uniqueImages = [...new Set(imageMatches)];
    uniqueImages.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0]);
      const numB = parseInt(b.match(/\d+/)![0]);
      return numA - numB;
    });

    console.log('Images referenced in post:');
    uniqueImages.forEach(img => console.log(img));
    console.log('\nTotal unique images:', uniqueImages.length);
  }
}

listUsedImages();
