// Custom Next.js server using the built-in Node HTTP server
// Works for both development and production with Next.js 14 App Router

const { createServer } = require('http');
const next = require('next');

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // You can add custom route handling here if needed
      // Example:
      // if (req.url === '/health') {
      //   res.statusCode = 200;
      //   res.end('OK');
      //   return;
      // }

      await handle(req, res);
    } catch (err) {
      console.error('Server error:', err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port} (dev=${dev})`);
  });
});
