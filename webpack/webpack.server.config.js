const { resolve } = require('path');

const PATHS = {
  index: resolve('src', 'server.js'),
  output: resolve('dist', 'server'),
};

const config = {
  context: resolve(__dirname, '..'),
  entry: {
    index: PATHS.index,
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
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
};

module.exports = config;
