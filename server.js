import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const distDir = path.join(__dirname, 'dist');

app.use(express.static(distDir));

// Serve index.html for all client-side SPA routes
app.use((req, res, next) => {
  if ((req.method !== 'GET' && req.method !== 'HEAD') || path.extname(req.path)) {
    return next();
  }
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
