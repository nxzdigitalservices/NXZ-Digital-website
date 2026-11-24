import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const distDir = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error(
    `Error: Production build not found at ${indexHtmlPath}. Run "npm run build" before starting the server.`
  );
  process.exit(1);
}

const app = express();
app.disable('x-powered-by');

app.use(express.static(distDir));

// Serve index.html for all client-side SPA routes
app.use((req, res, next) => {
  if ((req.method !== 'GET' && req.method !== 'HEAD') || path.extname(req.path)) {
    return next();
  }
  res.sendFile(indexHtmlPath, (err) => {
    if (err && !res.headersSent) {
      next(err);
    }
  });
});

// Return 404 for unmatched routes/assets
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Express error handler
app.use((err, req, res, _next) => {
  console.error('Request error:', err);
  if (!res.headersSent) {
    res.status(err.status || 500).send('Internal Server Error');
  }
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

// Reverse-proxy-safe HTTP timeouts (LiteSpeed/Nginx/Cloudflare on Hostinger)
server.keepAliveTimeout = 61_000;
server.headersTimeout = 62_000;
server.requestTimeout = 30_000;

let isShuttingDown = false;

function shutdown(signal, exitCode = 0) {
  if (isShuttingDown) {
    return;
  }
  isShuttingDown = true;
  console.log(`Received ${signal}. Closing HTTP server gracefully...`);

  const forceExitTimer = setTimeout(() => {
    console.error('Forced shutdown after timeout.');
    server.closeAllConnections?.();
    process.exit(1);
  }, 10_000);
  forceExitTimer.unref();

  server.close((err) => {
    clearTimeout(forceExitTimer);
    if (err) {
      console.error('Error while closing HTTP server:', err);
      process.exit(1);
    }
    console.log('HTTP server closed cleanly.');
    process.exit(exitCode);
  });

  // Close idle keep-alive sockets immediately so process exits promptly
  server.closeIdleConnections?.();
}

server.on('error', (err) => {
  console.error('HTTP server failed:', err);
  process.exit(1);
});

process.on('SIGTERM', () => shutdown('SIGTERM', 0));
process.on('SIGINT', () => shutdown('SIGINT', 0));

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  shutdown('uncaughtException', 1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
  shutdown('unhandledRejection', 1);
});

