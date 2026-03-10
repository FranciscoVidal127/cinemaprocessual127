import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function addImage41() {
  const { data: post } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (!post) return;
  let content = post.content;

  const marker = "l'autre côté";
  const idx = content.indexOf(marker);
  if (idx === -1) {
    console.error('Marker not found');
    return;
  }

  let pos = content.indexOf('\n\n', idx);
  pos = pos === -1 ? content.length : pos + 2;

  const html = `\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez41.png" alt="De l'autre côté" loading="lazy" />
  </div>
</figure>\n`;

  content = content.slice(0, pos) + html + content.slice(pos);

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (!error) {
    console.log('✅ Added Akerbrenez41.png successfully!');
  }
}

addImage41();
