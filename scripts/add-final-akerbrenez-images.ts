import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function addFinalImages() {
  const { data: post } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (!post) return;
  let content = post.content;

  const markers = [
    { search: 'Portrait d', file: 'Akerbrenez34.png', alt: 'Portrait d\'une jeune fille' },
    { search: "De l'aut", file: 'Akerbrenez41.png', alt: 'De l\'autre côté' },
    { search: 'À l', file: 'Akerbrenez45.png', alt: 'À l\'Est avec Sonia Wieder-Atherton' }
  ];

  let added = 0;
  for (const img of markers) {
    const idx = content.indexOf(img.search);
    if (idx === -1) {
      console.warn(`✗ Not found: "${img.search}"`);
      continue;
    }

    let pos = content.indexOf('\n\n', idx);
    pos = pos === -1 ? content.length : pos + 2;

    const html = `\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/${img.file}" alt="${img.alt}" loading="lazy" />
  </div>
</figure>\n`;

    content = content.slice(0, pos) + html + content.slice(pos);
    console.log(`✓ Added ${img.file}`);
    added++;
  }

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (!error) {
    console.log(`\n✅ Successfully added ${added} final images!`);
  }
}

addFinalImages();
