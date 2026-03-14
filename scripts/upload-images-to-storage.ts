import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join, extname } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const IMAGES_DIR = join(process.cwd(), 'public/images');
const BUCKET = 'images';

const mimeTypes: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

async function uploadImages() {
  const files = readdirSync(IMAGES_DIR);
  console.log(`Found ${files.length} files to upload`);

  let uploaded = 0;
  let failed = 0;

  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const mimeType = mimeTypes[ext];
    if (!mimeType) {
      console.log(`Skipping ${file} (unsupported type)`);
      continue;
    }

    const filePath = join(IMAGES_DIR, file);
    const fileData = readFileSync(filePath);

    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(file, fileData, {
        contentType: mimeType,
        upsert: true,
      });

    if (error) {
      console.error(`Failed to upload ${file}:`, error.message);
      failed++;
    } else {
      console.log(`Uploaded: ${file}`);
      uploaded++;
    }
  }

  console.log(`\nDone: ${uploaded} uploaded, ${failed} failed`);
  console.log(`\nStorage URL base: ${supabaseUrl}/storage/v1/object/public/${BUCKET}/`);
}

uploadImages().catch(console.error);
