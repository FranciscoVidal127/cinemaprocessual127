import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function updateArticleWithImages() {
  const backupContent = readFileSync('public/posts/Documento_sem_titulo_(26).md', 'utf-8');
  let content = backupContent;

  const img2Marker = 'Conhecer a Chantal Akerman é vivenciar alguém incomparável';
  const img2Index = content.indexOf(img2Marker);
  if (img2Index !== -1) {
    const img2Insert = content.indexOf('\n\n# ', img2Index);
    if (img2Insert !== -1) {
      const img2Html = `\n\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez2.png" alt="Chantal Akerman" loading="lazy" />
  </div>
</figure>\n`;
      content = content.slice(0, img2Insert) + img2Html + content.slice(img2Insert);
      console.log('✓ Image 2 inserted after introduction');
    }
  }

  const img3Marker = '**Início**';
  const img3Index = content.indexOf(img3Marker);
  if (img3Index !== -1) {
    const img3Insert = content.indexOf('\n\n#', img3Index);
    if (img3Insert !== -1) {
      const img3Html = `\n\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez3.png" alt="Início da entrevista" loading="lazy" />
  </div>
</figure>\n`;
      content = content.slice(0, img3Insert) + img3Html + content.slice(img3Insert);
      console.log('✓ Image 3 inserted after Início');
    }
  }

  const img4Marker = '**Amour fou**';
  const img4Index = content.indexOf(img4Marker);
  if (img4Index !== -1) {
    const img4Insert = content.indexOf('\n\n#', img4Index);
    if (img4Insert !== -1) {
      const img4Html = `\n\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez4.png" alt="A Loucura de Almayer" loading="lazy" />
  </div>
</figure>\n`;
      content = content.slice(0, img4Insert) + img4Html + content.slice(img4Insert);
      console.log('✓ Image 4 inserted after Amour fou');
    }
  }

  const img5Marker = '**Mercado de Arte**';
  const img5Index = content.indexOf(img5Marker);
  if (img5Index !== -1) {
    const img5Insert = content.indexOf('\n\n#', img5Index);
    if (img5Insert !== -1) {
      const img5Html = `\n\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez5.png" alt="Mercado de Arte" loading="lazy" />
  </div>
</figure>\n`;
      content = content.slice(0, img5Insert) + img5Html + content.slice(img5Insert);
      console.log('✓ Image 5 inserted after Mercado de Arte');
    }
  }

  const img6Marker = '**Livros**';
  const img6Index = content.indexOf(img6Marker);
  if (img6Index !== -1) {
    const img6Insert = content.indexOf('\n\n#', img6Index);
    if (img6Insert !== -1) {
      const img6Html = `\n\n<figure className="essay-editorial-inline">
  <div className="essay-editorial-frame">
    <img src="/images/Akerbrenez6.png" alt="Livros" loading="lazy" />
  </div>
</figure>\n`;
      content = content.slice(0, img6Insert) + img6Html + content.slice(img6Insert);
      console.log('✓ Image 6 inserted after Livros');
    }
  }

  const { error } = await supabase
    .from('posts')
    .update({ content })
    .eq('slug', 'uma-entrevista-em-pijamas');

  if (error) {
    console.error('\n✗ Error:', error);
  } else {
    console.log('\n✅ Article updated with 5 inline images');
  }
}

updateArticleWithImages();
