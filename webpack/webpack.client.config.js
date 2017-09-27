const { resolve } = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts.config');

const PATHS = {
  client: resolve('src', 'client.js'),
  output: resolve('dist', 'statics'),
};

const commonConfig = () => {
  const common = merge([
    {
      context: resolve(__dirname, '..'),
      entry: {
        bundle: PATHS.client,
      },
      output: {
        filename: '[name].js',
        path: PATHS.output,
      },
      target: 'web',
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
