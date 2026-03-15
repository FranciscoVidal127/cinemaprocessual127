import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const BASE = 'https://mgvwhsaenmdqffefwkkf.supabase.co/storage/v1/object/public/images/';

async function main() {
  const { data: post, error } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .maybeSingle();

  if (error || !post) {
    console.error('Error fetching post:', error);
    process.exit(1);
  }

  let content: string = post.content;

  // Fix 1: Replace Akerbrenez20 with Akerbrenez19 in "Eu Tu Ele Ela" section
  // The Akerbrenez19 block is currently misplaced near end of post near "A Loucura de Almayer"
  content = content.replace(
    `${BASE}Akerbrenez20.png" alt="Je Tu Il Elle, 1974"`,
    `${BASE}Akerbrenez19.png" alt="Je Tu Il Elle, 1974"`
  );

  // Fix 2: Remove the misplaced Akerbrenez19 block near "A Loucura de Almayer"
  // It appears with alt="Je Tu Il Elle, 1974" in context where it should not be
  // After the fix above, there's still an Akerbrenez19 misplaced near "A Loucura de Almayer" — check
  // Actually after fix 1, Akerbrenez19 will be in "Eu Tu Ele Ela" (correct) and no longer misplaced
  // The original Akerbrenez19 at the end had alt="Je Tu Il Elle, 1974" — once we replaced 20->19 above,
  // the end one is still there. We need to remove it.
  // The end one appears after "# Sonia de novo." and before "# **A Loucura de Almayer, 2011**"
  const misplacedBlock = `<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="${BASE}Akerbrenez19.png" alt="Je Tu Il Elle, 1974" loading="lazy" />
  </div>
</figure>


# **A Loucura de Almayer, 2011**`;

  content = content.replace(
    misplacedBlock,
    `# **A Loucura de Almayer, 2011**`
  );

  // Fix 3: Replace duplicate Akerbrenez30 (used for Rue Mallet-Stevens area / Histoires d'Amérique)
  // The second Akerbrenez30 has alt="Filme" and appears before "# **Histoires d'Amérique, 1988**"
  content = content.replace(
    `${BASE}Akerbrenez30.png" alt="Filme"`,
    `${BASE}Akerbrenez33.png" alt="Rue Mallet-Stevens, 1986"`
  );

  // Fix 4: Replace duplicate Akerbrenez36 (used after Family Business, near "Portrait d'une jeune fille")
  // It has alt="Filme" and the title around it is broken
  content = content.replace(
    `${BASE}Akerbrenez36.png" alt="Filme"`,
    `${BASE}Akerbrenez35.png" alt="Portrait d'une jeune fille de la fin des années 60s à Bruxelles, 1993"`
  );

  // Fix 5: Fix the broken title "# **Por\n\n<figure>...\n\n# ** d'une jeune fille..."
  // After fix 4, the figure has Akerbrenez35. The title split is still broken.
  // Replace broken title parts
  content = content.replace(
    '# **Por\n\n',
    '# **Portrait d\'une jeune fille de la fin des années 60s à Bruxelles, 1993**\n\n'
  );
  content = content.replace(
    '\n\n# ** d\'une jeune fille de la fin des années 60s à Bruxelles, 1993**',
    ''
  );

  // Fix 6: Replace duplicate Akerbrenez43 (used for "De l'autre côté") with Akerbrenez39
  // It has alt="Filme" and appears near "# ** l'autre côté, 2002**"
  content = content.replace(
    `${BASE}Akerbrenez43.png" alt="Filme"`,
    `${BASE}Akerbrenez39.png" alt="De l'autre côté, 2002"`
  );

  // Fix 7: Fix broken title "# ** l'autre côté, 2002**"
  content = content.replace(
    "# ** l'autre côté, 2002**",
    "# **De l'autre côté, 2002**"
  );

  // Fix 8: Remove duplicate Akerbrenez10 used for "À l'Est avec Sonia Wieder-Atherton, 2009"
  // It has alt="Filme" and appears before "# **À l'Est avec Sonia Wieder-Atherton, 2009**"
  content = content.replace(
    `${BASE}Akerbrenez10.png" alt="Filme"`,
    `${BASE}Akerbrenez10.png" alt="REMOVE_THIS_IMAGE"`
  );

  // Remove the figure block with the marker
  const removeBlock = `<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="${BASE}Akerbrenez10.png" alt="REMOVE_THIS_IMAGE" loading="lazy" />
  </div>
</figure>

# **À l'Est avec Sonia Wieder-Atherton, 2009**`;

  content = content.replace(
    removeBlock,
    `# **À l'Est avec Sonia Wieder-Atherton, 2009**`
  );

  const { error: updateError } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (updateError) {
    console.error('Update error:', updateError);
    process.exit(1);
  }

  console.log('Successfully fixed image order in uma-entrevista-em-pijamas');

  const { data: updated } = await supabase
    .from('posts')
    .select('content')
    .eq('slug', 'uma-entrevista-em-pijamas')
    .maybeSingle();

  if (updated) {
    const c = updated.content;
    console.log('\nVerification:');
    console.log('Akerbrenez19 count:', (c.match(/Akerbrenez19/g) || []).length, '(should be 1)');
    console.log('Akerbrenez20 count:', (c.match(/Akerbrenez20/g) || []).length, '(should be 0)');
    console.log('Akerbrenez33 count:', (c.match(/Akerbrenez33/g) || []).length, '(should be 1)');
    console.log('Akerbrenez35 count:', (c.match(/Akerbrenez35/g) || []).length, '(should be 1)');
    console.log('Akerbrenez39 count:', (c.match(/Akerbrenez39/g) || []).length, '(should be 1)');
    console.log('Akerbrenez30 count:', (c.match(/Akerbrenez30/g) || []).length, '(should be 1)');
    console.log('Akerbrenez36 count:', (c.match(/Akerbrenez36/g) || []).length, '(should be 1)');
    console.log('Akerbrenez43 count:', (c.match(/Akerbrenez43/g) || []).length, '(should be 1)');
    console.log('Akerbrenez10 count:', (c.match(/Akerbrenez10/g) || []).length, '(should be 1)');
    console.log('REMOVE_THIS_IMAGE:', c.includes('REMOVE_THIS_IMAGE') ? 'STILL PRESENT!' : 'cleared');
  }
}

main().catch(console.error);
