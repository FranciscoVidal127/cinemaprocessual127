import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function addImages() {
  const { data: post, error: fetchError } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .single();

  if (fetchError || !post) {
    console.error('Error fetching post:', fetchError);
    return;
  }

  let content = post.content;

  const lHommeHeading = "# **L'Homme à la valise, 1983**";
  const lHommeIdx = content.indexOf(lHommeHeading);

  if (lHommeIdx !== -1) {
    const lHommeEndLine = content.indexOf('\n', lHommeIdx) + 1;
    const image19Html = `

<figure className="essay-editorial-inline">
  <img src="/images/Akerbrenez19.png" alt="L'Homme à la valise" />
</figure>`;
    content = content.slice(0, lHommeEndLine) + image19Html + content.slice(lHommeEndLine);
    console.log('✓ Inserted Akerbrenez19.png after "L\'Homme à la valise, 1983"');
  } else {
    console.error('Could not find L\'Homme à la valise heading');
  }

  const pinaHeading = "# **Un jour Pina m'a demandé', 1983**";
  const pinaIdx = content.indexOf(pinaHeading);

  if (pinaIdx !== -1) {
    const pinaEndLine = content.indexOf('\n', pinaIdx) + 1;
    const image20Html = `

<figure className="essay-editorial-inline">
  <img src="/images/Akerbrenez20.png" alt="Un jour Pina m'a demandé" />
</figure>`;
    content = content.slice(0, pinaEndLine) + image20Html + content.slice(pinaEndLine);
    console.log('✓ Inserted Akerbrenez20.png after "Un jour Pina m\'a demandé\', 1983"');
  } else {
    console.error('Could not find Un jour Pina heading');
  }

  const jAiFaimHeading = "# **J'ai faim, j'ai froid, 1984**";
  const jAiFaimIdx = content.indexOf(jAiFaimHeading);

  if (jAiFaimIdx !== -1) {
    const jAiFaimEndLine = content.indexOf('\n', jAiFaimIdx) + 1;
    const image22Html = `

<figure className="essay-editorial-inline">
  <img src="/images/Akerbrenez22.png" alt="J'ai faim, j'ai froid" />
</figure>`;
    content = content.slice(0, jAiFaimEndLine) + image22Html + content.slice(jAiFaimEndLine);
    console.log('✓ Inserted Akerbrenez22.png after "J\'ai faim, j\'ai froid, 1984"');
  } else {
    console.error('Could not find J\'ai faim heading');
  }

  const { error: updateError } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (updateError) {
    console.error('Error updating post:', updateError);
    return;
  }

  console.log('\n✅ Successfully added missing images!');
}

addImages();
