import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function insertImage41() {
  const { data } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (!data) return;

  let content = data.content;

  const marker = 'Avec Sonia Wieder-Atherton, 2002';
  const idx = content.indexOf(marker);
  
  if (idx === -1) {
    console.error('Marker not found');
    return;
  }

  const nextLine = content.indexOf('\n', idx);
  const insertPos = content.indexOf('\n\n', nextLine) + 2;

  const imageHtml = `\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez41.png" alt="De l'autre côté" loading="lazy" />
  </div>
</figure>\n`;

  content = content.slice(0, insertPos) + imageHtml + content.slice(insertPos);

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (!error) {
    console.log('✅ Successfully added Akerbrenez41.png!');
  } else {
    console.error('Error:', error);
  }
}

insertImage41();
