import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function savePortraitPlugin(): Plugin {
  return {
    name: 'save-portrait-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-portrait', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { dataUrl } = JSON.parse(body);
              if (!dataUrl) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'Missing dataUrl' }));
                return;
              }
              const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
              const buffer = Buffer.from(base64Data, 'base64');
              const publicDir = path.resolve(__dirname, 'public');
              if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir, { recursive: true });
              }
              fs.writeFileSync(path.join(publicDir, 'its-me-siva.png'), buffer);
              fs.writeFileSync(path.join(publicDir, 'its me Siva.png'), buffer);
              fs.writeFileSync(path.join(publicDir, 'profile.png'), buffer);
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err: any) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), savePortraitPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      allowedHosts: [
        'palla-siva-ai-video-portfolio.onrender.com',
      ],
    },
    preview: {
      allowedHosts: [
        'palla-siva-ai-video-portfolio.onrender.com',
      ],
    },
  };
});
