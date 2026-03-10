import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function verify() {
  const { data } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (!data) return;

  const imageMatches = data.content.match(/\/images\/Akerbrenez\d+\.png/g);
  const uniqueImages = imageMatches ? [...new Set(imageMatches)] : [];
  
  uniqueImages.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)![0]);
    const numB = parseInt(b.match(/\d+/)![0]);
    return numA - numB;
  });

  console.log('Images in database content:');
  uniqueImages.forEach(img => console.log(img));
  console.log(`\nTotal: ${uniqueImages.length} unique images`);
}

verify();
