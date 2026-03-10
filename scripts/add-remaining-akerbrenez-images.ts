import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

const remainingImages = [
  { marker: 'Histoires d', file: 'Akerbrenez28.png', alt: "Histoires d'Amérique" },
  { marker: "Portrait d'une jeune", file: 'Akerbrenez34.png', alt: "Portrait d'une jeune fille" },
  { marker: 'Chantal Akerman par Chantal', file: 'Akerbrenez35.png', alt: 'Chantal Akerman par Chantal Akerman' },
  { marker: 'Um Divã em Nova', file: 'Akerbrenez36.png', alt: 'Um Divã em Nova York' },
  { marker: "De l'autre", file: 'Akerbrenez41.png', alt: "De l'autre côté" },
  { marker: "À l'Est avec", file: 'Akerbrenez45.png', alt: "À l'Est avec Sonia Wieder-Atherton" }
];

async function addRemainingImages() {
  const { data: post } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (!post) {
    console.error('Could not fetch post');
    return;
  }

  let content = post.content;
  let insertedCount = 0;

  for (const img of remainingImages) {
    const markerIndex = content.indexOf(img.marker);
    if (markerIndex === -1) {
      console.warn(`✗ Marker not found: "${img.marker}"`);
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

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (error) {
    console.error('\n✗ Error:', error);
  } else {
    console.log(`\n✅ Added ${insertedCount} remaining images!`);
  }
}

addRemainingImages();
