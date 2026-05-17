import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, readdirSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'
import { createReadStream, statSync } from 'fs'

function servePublicInDev() {
  const publicDir = resolve('public');
  return {
    name: 'serve-public-in-dev',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const filePath = join(publicDir, decodeURIComponent(req.url.split('?')[0]));
        try {
          const stat = statSync(filePath);
          if (stat.isFile()) {
            const stream = createReadStream(filePath);
            stream.pipe(res);
            return;
          }
        } catch {}
        next();
      });
    }
  };
}

function safePublicCopy() {
  return {
    name: 'safe-public-copy',
    closeBundle() {
      function copyDirectory(src: string, dest: string) {
        try { mkdirSync(dest, { recursive: true }); } catch {}
        let entries;
        try { entries = readdirSync(src, { withFileTypes: true }); } catch { return; }
        for (const entry of entries) {
          const srcPath = join(src, entry.name);
          const destPath = join(dest, entry.name);
          try {
            if (entry.isDirectory()) {
              copyDirectory(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          } catch (err: any) {
            if (err.code !== 'EAGAIN') {
              console.warn(`Could not copy ${entry.name}: ${err.code}`);
            }
          }
        }
      }
      copyDirectory('public', 'dist');
    }
  };
}

export default defineConfig({
  plugins: [react(), servePublicInDev(), safePublicCopy()],
  publicDir: false
})
