const { resolve } = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts.config');

const PATHS = {
  index: resolve('src', 'server.jsx'),
  output: resolve('dist', 'server'),
  cleanRoot: resolve('dist'),
};

const commonConfig = () => {
  const cleanOptions = {
    root: PATHS.cleanRoot,
  };

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
    parts.cleanDist({ name: 'server', options: cleanOptions }),
    parts.babelTranspile(),
    parts.transformHTML(),
    parts.loadImages({ limit: 20000, emitFile: false }),
  ]);

  return common;
};

const developmentConfig = () => {
  const devConfig = merge([
    {
      output: {
        publicPath: 'http://localhost:3001/',
      },
    },
    parts.readCSS(),
    parts.lintJS(),
  ]);

  return devConfig;
};
const productionConfig = () => {};

module.exports = function clientConfig(env) {
  if (env === 'production') {
    return merge(commonConfig(), productionConfig());
  }

  return merge(commonConfig(), developmentConfig());
};
