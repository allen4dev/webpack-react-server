const { resolve } = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts.config');

const PATHS = {
  index: resolve('src', 'server.jsx'),
  output: resolve('dist', 'server'),
};

const commonConfig = () => {
  const common = merge([
    {
      context: resolve(__dirname, '..'),
      entry: {
        index: PATHS.index,
      },
      output: {
        filename: '[name].js',
        path: PATHS.output,
      },
      target: 'node',
      resolve: {
        extensions: ['.js', '.jsx', 'json'],
      },
    },
    parts.babelTranspile(),
  ]);

  return common;
};

const developmentConfig = () => {};
const productionConfig = () => {};

module.exports = function clientConfig(env) {
  if (env === 'production') {
    return merge(commonConfig(), productionConfig());
  }

  return merge(commonConfig(), developmentConfig());
};
