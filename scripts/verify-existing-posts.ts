import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function verifyExistingPosts() {
  console.log('\n═══════════════════════════════════════════════');
  console.log('  VERIFICAÇÃO DE INTEGRIDADE DOS POSTS');
  console.log('═══════════════════════════════════════════════\n');

  const { data: posts } = await supabase
    .from('posts')
    .select('title, slug, content, created_at')
    .order('created_at', { ascending: false });

  if (!posts) {
    console.error('Erro ao buscar posts');
    return;
  }

  console.log(`Total de posts no database: ${posts.length}\n`);

  const issues: string[] = [];

  posts.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
    console.log(`   Slug: ${post.slug}`);

    const contentLength = post.content?.length || 0;
    const imageCount = (post.content?.match(/<img/g) || []).length;
    const figureCount = (post.content?.match(/<figure/g) || []).length;

    console.log(`   📏 Tamanho: ${contentLength} caracteres`);
    console.log(`   🖼️ Imagens: ${imageCount}`);
    console.log(`   📦 Figures: ${figureCount}`);

    if (contentLength < 500) {
      console.log(`   ⚠️ ALERTA: Conteúdo muito curto!`);
      issues.push(`${post.title}: Conteúdo muito curto (${contentLength} chars)`);
    }

    if (contentLength > 1000 && imageCount === 0) {
      console.log(`   ⚠️ ALERTA: Post longo sem imagens`);
      issues.push(`${post.title}: Sem imagens mas tem conteúdo longo`);
    }

    console.log('');
  });

  console.log('═══════════════════════════════════════════════');
  console.log('RESUMO DA VERIFICAÇÃO');
  console.log('═══════════════════════════════════════════════\n');

  if (issues.length === 0) {
    console.log('✅ Todos os posts parecem estar em boa ordem!\n');
  } else {
    console.log(`⚠️ ${issues.length} problemas encontrados:\n`);
    issues.forEach((issue, i) => {
      console.log(`${i + 1}. ${issue}`);
    });
    console.log('');
  }
}

verifyExistingPosts();
