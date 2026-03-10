import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

const imageMap = [
  { marker: 'Conhecer a Chantal Akerman é vivenciar alguém incomparável', file: 'Akerbrenez2.png', alt: 'Chantal Akerman' },
  { marker: '**Início**', file: 'Akerbrenez3.png', alt: 'Início da entrevista' },
  { marker: '**Amour fou**', file: 'Akerbrenez4.png', alt: 'A Loucura de Almayer' },
  { marker: '**Mercado de Arte**', file: 'Akerbrenez5.png', alt: 'Mercado de Arte' },
  { marker: '**Livros**', file: 'Akerbrenez6.png', alt: 'Livros' },
  { marker: 'Le Marteau, 1986', file: 'Akerbrenez23.png', alt: 'Le Marteau' },
  { marker: 'La paresse, 1986', file: 'Akerbrenez24.png', alt: 'La paresse' },
  { marker: 'Rue Mallet-Stevens, 1986', file: 'Akerbrenez25.png', alt: 'Rue Mallet-Stevens' },
  { marker: 'Golden Eighties, 1986', file: 'Akerbrenez26.png', alt: 'Golden Eighties' },
  { marker: 'Letters Home, 1986', file: 'Akerbrenez27.png', alt: 'Letters Home' },
  { marker: "Histoires d'Amérique, 1988", file: 'Akerbrenez28.png', alt: "Histoires d'Amérique" },
  { marker: 'Trois Strophes sur le nom de Sacher, 1989', file: 'Akerbrenez29.png', alt: 'Trois Strophes sur le nom de Sacher' },
  { marker: 'Pour Febe Elisabeth Velasquez, El Salvador, 1991', file: 'Akerbrenez30.png', alt: 'Pour Febe Elisabeth Velasquez' },
  { marker: 'Noite e Dia, 1991', file: 'Akerbrenez31.png', alt: 'Noite e Dia' },
  { marker: 'Le Déménagement, 1992', file: 'Akerbrenez32.png', alt: 'Le Déménagement' },
  { marker: 'Do Leste, 1993', file: 'Akerbrenez33.png', alt: 'Do Leste' },
  { marker: "Portrait d'une jeune fille de la fin des années 60s à Bruxelles, 1993", file: 'Akerbrenez34.png', alt: "Portrait d'une jeune fille" },
  { marker: 'Chantal Akerman par Chantal Akerman, 1997', file: 'Akerbrenez35.png', alt: 'Chantal Akerman par Chantal Akerman' },
  { marker: 'Um Divã em Nova York, 1996', file: 'Akerbrenez36.png', alt: 'Um Divã em Nova York' },
  { marker: 'Le jour où, 1997', file: 'Akerbrenez37.png', alt: 'Le jour où' },
  { marker: 'Sul, 1999', file: 'Akerbrenez38.png', alt: 'Sul' },
  { marker: 'A Prisioneira, 2000', file: 'Akerbrenez39.png', alt: 'A Prisioneira' },
  { marker: 'Avec Sonia Wieder-Atherton, 2002', file: 'Akerbrenez40.png', alt: 'Avec Sonia Wieder-Atherton' },
  { marker: "De l'autre côté, 2002", file: 'Akerbrenez41.png', alt: "De l'autre côté" },
  { marker: 'Demain on déménage, 2004', file: 'Akerbrenez42.png', alt: 'Demain on déménage' },
  { marker: 'Lá-bas, 2006', file: 'Akerbrenez43.png', alt: 'Lá-bas' },
  { marker: 'Tombée de nuit sur Shanghaï, 2007', file: 'Akerbrenez44.png', alt: 'Tombée de nuit sur Shanghaï' },
  { marker: "À l'Est avec Sonia Wieder-Atherton, 2009", file: 'Akerbrenez45.png', alt: "À l'Est avec Sonia Wieder-Atherton" },
  { marker: 'A Loucura de Almayer, 2011', file: 'Akerbrenez46.png', alt: 'A Loucura de Almayer' }
];

async function insertAllImages() {
  const backupContent = readFileSync('public/posts/Documento_sem_titulo_(26).md', 'utf-8');
  let content = backupContent;
  
  let insertedCount = 0;
  let notFoundCount = 0;

  for (const img of imageMap) {
    const markerIndex = content.indexOf(img.marker);
    if (markerIndex === -1) {
      console.warn(`✗ Marker not found: "${img.marker}"`);
      notFoundCount++;
      continue;
    }

    let insertPos = content.indexOf('\n\n', markerIndex);
    if (insertPos === -1) {
      insertPos = content.length;
    } else {
      insertPos += 2;
    }

    const imageHtml = `\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/${img.file}" alt="${img.alt}" loading="lazy" />
  </div>
</figure>\n`;

    content = content.slice(0, insertPos) + imageHtml + content.slice(insertPos);
    console.log(`✓ Inserted ${img.file}`);
    insertedCount++;
  }

  console.log(`\nSummary: ${insertedCount} images inserted, ${notFoundCount} markers not found`);

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (error) {
    console.error('\n✗ Database error:', error);
  } else {
    console.log('\n✅ Article updated successfully with all available images!');
  }
}

insertAllImages();
