import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

interface PostToMigrate {
  url: string;
  title: string;
  slug: string;
  date: string;
  shouldCreate: boolean;
}

const POSTS_TO_MIGRATE: PostToMigrate[] = [
  {
    url: 'https://cinemaprocessual.blogspot.com/2023/02/anotacoes-breves-de-knock-at-cabin2023.html',
    title: 'Anotações breves de Knock At The Cabin (2023)',
    slug: 'knock-at-the-cabin',
    date: '2023-02-04',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2023/03/um-diva-em-nova-york-1996-mostra.html',
    title: 'Um Divã em Nova York (1996) - Mostra Chantal Akerman no MAM',
    slug: 'um-diva-nova-york-akerman',
    date: '2023-03-15',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2023/08/dentro-da-noite-as-criticas.html',
    title: 'Dentro da Noite - As Críticas Cinematográficas de Manny Farber',
    slug: 'manny-farber-dentro-da-noite',
    date: '2023-08-21',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2023/08/o-fim-e-o-principio.html',
    title: 'O Fim e o Princípio',
    slug: 'o-fim-e-o-principio',
    date: '2023-08-13',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2024/07/ecra-film-festival-2024-interview-with_2.html',
    title: 'ECRÃ Film Festival 2024: Interview with Marianna Milhorat',
    slug: 'ecra-2024-marianna-milhorat-english',
    date: '2024-07-02',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2024/07/festival-de-cinema-ecra-2024-entrevista.html',
    title: 'Festival Ecrã 2024: Entrevista com Kurt Walker (Português)',
    slug: 'ecra-2024-kurt-walker-portugues',
    date: '2024-07-02',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2024/07/festival-ecra-2024-entrevista-com_6.html',
    title: 'Festival Ecrã 2024: Entrevista com Matilde Miranda Mellado (Português)',
    slug: 'ecra-2024-matilde-mellado-portugues',
    date: '2024-07-06',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2024/07/festival-ecra-2024-entrevista-com.html',
    title: 'Festival Ecrã 2024: Entrevista com Marianna Milhorat (Português)',
    slug: 'ecra-2024-marianna-milhorat-portugues',
    date: '2024-07-02',
    shouldCreate: true
  },
  {
    url: 'https://cinemaprocessual.blogspot.com/2024/07/ecra-film-festival-2024-interview-with.html',
    title: 'ECRÃ Film Festival 2024: Interview with Kurt Walker (English)',
    slug: 'ecra-2024-kurt-walker-english',
    date: '2024-07-02',
    shouldCreate: true
  }
];

async function checkExistingPosts() {
  console.log('\n═══════════════════════════════════════════════');
  console.log('  VERIFICAÇÃO DE POSTS PARA MIGRAÇÃO');
  console.log('═══════════════════════════════════════════════\n');

  const { data: existing } = await supabase
    .from('posts')
    .select('slug, title');

  const existingSlugs = new Set(existing?.map(p => p.slug) || []);

  console.log(`📊 Posts no database: ${existing?.length || 0}`);
  console.log(`📊 Posts identificados para migração: ${POSTS_TO_MIGRATE.length}\n`);

  const toCreate = POSTS_TO_MIGRATE.filter(p => !existingSlugs.has(p.slug));

  console.log('═══════════════════════════════════════════════');
  console.log(`POSTS QUE PRECISAM SER CRIADOS: ${toCreate.length}`);
  console.log('═══════════════════════════════════════════════\n');

  toCreate.forEach((post, i) => {
    console.log(`${i + 1}. ${post.title}`);
    console.log(`   Slug: ${post.slug}`);
    console.log(`   Data: ${post.date}`);
    console.log(`   URL: ${post.url}\n`);
  });

  console.log('\n⚠️  NOTA: Estes posts precisam ser migrados manualmente');
  console.log('devido à complexidade do conteúdo e formatação.\n');
  console.log('Para cada post, será necessário:');
  console.log('1. Extrair texto integral do Blogspot');
  console.log('2. Baixar e organizar imagens');
  console.log('3. Preservar formatação (itálico, negrito, quebras)');
  console.log('4. Inserir no banco de dados\n');
}

checkExistingPosts();
