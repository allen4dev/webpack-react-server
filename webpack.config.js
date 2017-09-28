const client = require('./webpack/webpack.client.config');
const server = require('./webpack/webpack.server.config');
const development = require('./webpack/webpack.dev.config');

if (
  process.env.NODE_ENV === 'devserver' ||
  process.env.NODE_ENV === 'production'
) {
  module.exports = [client, server];
} else {
  module.exports = development;
}
