const express = require('express');
const next = require('next');

const server = express();
const app = next({ dev: false });
const port = process.env.PORT || 2000;

const handle = app.getRequestHandler();

server.disable('x-powered-by');

server.use(async (req, res) => {
  await app.prepare();
  handle(req, res);
});

server.listen(port, () => console.log(`Server started on port ${port}`));
