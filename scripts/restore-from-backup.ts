import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function restoreFromBackup() {
  // Read the backup markdown file
  const backupContent = readFileSync('public/posts/Documento_sem_titulo_(26).md', 'utf-8');

  // Extract content without frontmatter
  const contentMatch = backupContent.match(/^###\s+(.+)\n\n([\s\S]*)$/);
  if (!contentMatch) {
    console.error('Could not parse backup file');
    return;
  }

  let content = contentMatch[2];

  // Insert images at appropriate positions
  // We have: Akerbrenez.png (main), Akerbrenez2-6.png (5 images)

  // Insert first image after "Início"
  const inicioMarker = '**Início**';
  const inicioIndex = content.indexOf(inicioMarker);
  if (inicioIndex !== -1) {
    const insertPos = content.indexOf('\n\n', inicioIndex) + 2;
    const imageHtml = `<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img
      src="/images/Akerbrenez2.png"
      alt="Chantal Akerman e Nicole Brenez"
      loading="lazy"
    />
  </div>
</figure>

`;
    content = content.slice(0, insertPos) + imageHtml + content.slice(insertPos);
  }

  console.log('✓ Restored content from backup');
  console.log('✓ Added 1 image (Akerbrenez2.png)');

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (error) {
    console.error('Error updating post:', error);
  } else {
    console.log('\n✅ Successfully restored post from backup!');
  }
}

restoreFromBackup();
