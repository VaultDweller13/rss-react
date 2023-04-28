import express from 'express';
import { createServer as createViteServer } from 'vite';

const port = 5173;

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
      render(url, res);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`listen to port ${port}`);
  });
}

createServer();
