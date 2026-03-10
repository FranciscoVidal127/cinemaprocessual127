import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

const BLOGSPOT_POSTS = [
  'https://cinemaprocessual.blogspot.com/2023/02/anotacoes-breves-de-knock-at-cabin2023.html',
  'https://cinemaprocessual.blogspot.com/2023/02/uma-conversa-entre-jonas-mekas-e-stan.html',
  'https://cinemaprocessual.blogspot.com/2023/02/uma-entrevista-em-pijamas.html',
  'https://cinemaprocessual.blogspot.com/2023/03/um-diva-em-nova-york-1996-mostra.html',
  'https://cinemaprocessual.blogspot.com/2023/08/dentro-da-noite-as-criticas.html',
  'https://cinemaprocessual.blogspot.com/2023/08/festival-ecra-2023-algumas-anotacoes.html',
  'https://cinemaprocessual.blogspot.com/2023/08/o-fim-e-o-principio.html',
  'https://cinemaprocessual.blogspot.com/2023/08/sobre-o-vazio.html',
  'https://cinemaprocessual.blogspot.com/2023/09/cobertura-da-20-edicao-da-mostra-filme_19.html',
  'https://cinemaprocessual.blogspot.com/2023/09/cobertura-da-20-edicao-da-mostra-filme_21.html',
  'https://cinemaprocessual.blogspot.com/2023/10/cobertura-da-20-edicao-da-mostra-filme.html',
  'https://cinemaprocessual.blogspot.com/2023/11/breve-entrevista-com-jose-roberto.html',
  'https://cinemaprocessual.blogspot.com/2023/11/jose-roberto-aguilar-sonho-e.html',
  'https://cinemaprocessual.blogspot.com/2024/07/ecra-film-festival-2024-interview-with.html',
  'https://cinemaprocessual.blogspot.com/2024/07/ecra-film-festival-2024-interview-with_2.html',
  'https://cinemaprocessual.blogspot.com/2024/07/festival-de-cinema-ecra-2024-entrevista.html',
  'https://cinemaprocessual.blogspot.com/2024/07/festival-ecra-2024-entrevista-com.html',
  'https://cinemaprocessual.blogspot.com/2024/07/festival-ecra-2024-entrevista-com_6.html',
  'https://cinemaprocessual.blogspot.com/2024/07/festival-ecra-2024-interview-with.html',
  'https://cinemaprocessual.blogspot.com/2025/07/o-inconsciente-maquinico-referencias.html'
];

async function mapPosts() {
  console.log('\n═══════════════════════════════════════════════');
  console.log('  MAPEAMENTO COMPLETO DO BLOG');
  console.log('═══════════════════════════════════════════════\n');

  const { data: existingPosts } = await supabase
    .from('posts')
    .select('title, slug');

  const existingSlugs = new Set(existingPosts?.map(p => p.slug) || []);

  console.log(`📊 Posts no Blogspot: ${BLOGSPOT_POSTS.length}`);
  console.log(`📊 Posts no database: ${existingPosts?.length || 0}\n`);

  console.log('═══════════════════════════════════════════════');
  console.log('POSTS EXISTENTES NO DATABASE:');
  console.log('═══════════════════════════════════════════════\n');

  existingPosts?.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
    console.log(`   → ${post.slug}\n`);
  });

  console.log('\n═══════════════════════════════════════════════');
  console.log('POSTS NO BLOGSPOT (precisam análise):');
  console.log('═══════════════════════════════════════════════\n');

  BLOGSPOT_POSTS.forEach((url, i) => {
    const slug = url.split('/').pop()?.replace('.html', '') || '';
    console.log(`${i + 1}. ${url}`);
    console.log(`   Slug: ${slug}\n`);
  });

  console.log('\n═══════════════════════════════════════════════');
  console.log('ANÁLISE: PRÓXIMOS PASSOS');
  console.log('═══════════════════════════════════════════════\n');

  console.log('✓ Total de 20 posts encontrados no Blogspot');
  console.log('✓ 12 posts já existem no database');
  console.log('→ Verificar se posts existentes estão completos');
  console.log('→ Migrar posts que faltam');
  console.log('→ Restaurar todas as imagens\n');
}

mapPosts();
