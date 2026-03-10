import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { writeFileSync, readFileSync, existsSync } from 'fs';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

const allImages = [
  { num: 2, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjB_eTb19ZuE9P2Z7MLLEIznx7331SgUbWM5zy40ykzhhptle5-KoMiX6zvQ4Hw9HD74TlSKsEx4JS-RgzOk6uaIe-NZOek8b9vgvGw2f_24yeOrcF_bxZ_wn98XGoEOAdM-5CuXDZosl_aVTiUWVTLfWu2Y_GAPgPGXKFNpgyXUzxjbi2DJbSpKzbTFQ', marker: 'Conhecer a Chantal Akerman' },
  { num: 3, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhzRGI53oUEttf1ARm6QfkSldsVOuoutOfk7p-9aCa6y2IW24gmjBA984z5MbTO-y0x4NDeS2yHztrN4YkPgi-4CMhfkjca3-UQmTLWNr0O_yBFCZzJ6MBlXQPwQ4zcJ_beYRq2S8nK7hYolspEBmE6xSwn4TsR_dcgfOdnOpShURZRJvqBuGKwYEOVSg', marker: '**Início**' },
  { num: 4, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg-bi3YE5O_ss9oa91uK8sRVdIlxrLXcUF2oFZcJYHqhM06sy656793ppzzDa57JlpxjFDIEuNWzIta663pFiiibUPmj0kPo1bL75belZKXLTGAGPmDGm_HVOsAAFnuvEe6-D7a4GtruOell63FJ9HRy9NICUHwNxCwE927XAftVGytEOevERbUVQ-YGw', marker: '**Amour fou**' },
  { num: 5, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEg9EosNBN5Bs0b03g7cef0NrAzAQfy4EmOTnA6gZIUrf97zHQUp7fQzprKmGWbpvb25nJnQSde7et4AVjaKl_hAXVn7_yFEDsdhEogE4QaEuT43FauFokM3nmf_SvpaRWLP7vcxyJw2tSNO-vWH_1Rta9eegI7hXHNDyxcW9VAygNB1Aff1_bUmiYn2Q', marker: '**Mercado de Arte**' },
  { num: 6, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEjJH8sblNdRz8R0Kj9yM-_BSmHHGmj6qY72jYVDdSe-s6M9ScQVGIk3MzeV737cHDlumOpWRPfaTwFU1b2G8PVR2nBXcdavPwF7Pqxk5_asMczYsZIzYKdFxuhxLxZMsZpwdeyxX13r7dU5hR1UppRDBEkeYTyhbgSVkQx-Y6v7GieUKlx4g2JFtbhFHw', marker: '**Livros**' },
  { num: 7, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEgcpP-tSsOPTXYoIrzZZDXBmfBKL8_dE2upd-PyznH_6ybDZ_TA2rkeVZoBMoZcOI2pP4WK2MoycvFMqpMrwpGiwYNgGyBM8OwRpvHzUIKqEZdMg974AqPWay_zYYEjOVzC9--fyfEjty_Yv-WnZFDkzsnDo4RgI7IJcCYjqdHNuNWAHVkmSXwJnm_H2A', marker: '*Mouchette (1967)*, de Robert Bresson.' },
  { num: 8, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEiXTh2NvskLL9WuGu-He7FrvgyJTStonvI2v0PBmJKc1s9Ce6VSFjcBKhulc3xZ92G8ShV3dKu8z4JIavytYVhUZC6iJ_DgrXZHNrnwJYjb0XoqfZCaZ5C8U8u4eWScrmOx9S6KxexTEGWR4Vvjaun7GCglFx1A-3SI76cdnTghZBheH-mKanF1TwJ19Q', marker: 'Exploda Minha Cidade, 1968' },
  { num: 9, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEhEr9Ter2GdlUVOoUKwyfDvLOIEK7UUUfELKPYoWopkerRKb2J9r9wrSHbhV1ZmCu59PCSOqvpkjmh4v0BL6iKo7Q0soOP3DFxU8uf1DtZC-sInXgeXboAxp9boVstqm3KHoDa0sLUbo2fY19SSvS8VeUbCDaGwQMMYD8Y-X4On8Sg6AQ_YTtWUUQbXrw', marker: 'A criança amada ou eu represento uma mulher casada, 1971' },
  { num: 10, url: 'https://blogger.googleusercontent.com/img/a/AVvXsEj84-QvKQtVFNklNh9_OOuLhUr4INWhlt53j38Y8WsxGygwhsUTuyWRQTjqjAplM21zKXADKdd-49f0dpgoVzJ4nMKZzvzdc-dKvFfDpWGLjUorJFJezhz85OWqa8eB9BntiQQR3wsEiTPgmu-PIsmfnPfI83lpUk3QhFizte_T5LhsM2luBVsU268r9Q', marker: 'Hotel Monterey, 1972' }
];

async function downloadImagesInBatches() {
  console.log('Starting download of all 54 images...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const img of allImages) {
    const filename = `Akerbrenez${img.num}.png`;
    const filepath = `public/images/${filename}`;
    
    if (existsSync(filepath)) {
      console.log(`⊙ Skipping ${filename} (already exists)`);
      successCount++;
      continue;
    }
    
    try {
      const response = await fetch(img.url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const buffer = await response.arrayBuffer();
      writeFileSync(filepath, Buffer.from(buffer));
      console.log(`✓ Downloaded ${filename}`);
      successCount++;
      
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`✗ Failed ${filename}:`, error.message);
      failCount++;
    }
  }
  
  console.log(`\n✅ Complete: ${successCount} successful, ${failCount} failed`);
}

downloadImagesInBatches();
