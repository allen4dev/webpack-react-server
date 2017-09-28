const { resolve } = require('path');
const merge = require('webpack-merge');

const parts = require('./webpack.parts.config');

const PATHS = {
  client: resolve('src', 'client.jsx'),
  output: resolve('dist', 'statics'),
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
    parts.cleanDist({ name: 'statics', options: cleanOptions }),
    parts.babelTranspile(),
    parts.loadImages({ limit: 20000 }),
    parts.extractCSS(),
    parts.lintJS(),
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
  ]);

  return devConfig;
};

const productionConfig = () => {};

module.exports = function clientConfig(env) {
  let config;
  if (env === 'production') {
    config = merge(commonConfig(), productionConfig());
    // console.log('PROD CONFIG', config);
    return config;
  }

  config = merge(commonConfig(), developmentConfig());
  // console.log('DEV CONFIG', JSON.stringify(config, undefined, 2));
  return config;
};
