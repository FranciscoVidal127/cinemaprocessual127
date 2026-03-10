import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function listPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('title, slug, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('\n═══════════════════════════════════════════════');
  console.log('  POSTS EXISTENTES NO BANCO DE DADOS');
  console.log('═══════════════════════════════════════════════\n');

  data.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
    console.log(`   Slug: ${post.slug}`);
    console.log(`   Data: ${post.created_at}\n`);
  });

  console.log(`Total de posts: ${data.length}\n`);
}

listPosts();
