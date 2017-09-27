const { resolve } = require('path');

const PATHS = {
  client: resolve('src', 'client.js'),
  output: resolve('dist', 'statics'),
};

const config = {
  context: resolve(__dirname, '..'),
  entry: {
    bundle: PATHS.client,
  },
  output: {
    filename: '[name].js',
    path: PATHS.output,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
};

module.exports = config;
