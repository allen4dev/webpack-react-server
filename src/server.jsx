import http from 'http';

import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';

import { renderToString } from 'react-dom/server';

import App from './App';
import layout from './layout.html';

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
    </StaticRouter>,
  );

  res.setHeader('Content-Type', 'text/html');

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });

    res.end();
  }

  res.send(
    layout({
      html,
      domain,
      title: 'React Server Render',
    }),
  );
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔');
  console.log(`Server running in port: ${PORT}`);
  console.log('🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔');
});
