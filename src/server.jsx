import http from 'http';

import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { renderToString } from 'react-dom/server';

import App from './App';

const PORT = process.env.PORT || 3000;
const app = express();

const domain = 'http://localhost:3001';

app.get('/some/endpoint', (req, res) => {
  res.send('Some callback redirect or api');
});

app.get('*', (req, res) => {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.setHeader('Content-Type', 'text/html');

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });

    res.end();
  }

  const template = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>Document</title>
    </head>
  <body>
    <div id="app">${html}</div>
    <script src="${domain}/bundle.js"></script>
  </body>
  </html>`;

  res.send(template);
});

const server = http.createServer(app);

app.listen(PORT, () => {
  console.log('🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔');
  console.log(`Server running in port: ${PORT}`);
  console.log('🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔');
});
