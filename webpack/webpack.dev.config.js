const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const parts = require('./webpack.parts.config');

const PATHS = {
  client: resolve('src', 'client.jsx'),
  output: resolve('dist'),
  cleanRoot: resolve('dist', '..'),
};

const devConfig = () => {
  const cleanOptions = {
    root: PATHS.cleanRoot,
  };

  const config = merge([
    {
      context: resolve(__dirname, '..'),
      entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        PATHS.client,
      ],
      output: {
        filename: 'bundle.js',
        path: PATHS.output,
        // publicPath: '/'
      },
      devServer: {
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HTMLWebpackPlugin({
          title: 'Development',
          template: 'index.ejs',
        }),
      ],

      target: 'web',
      resolve: {
        extensions: ['.js', '.jsx', 'json'],
      },
    },
    parts.cleanDist({ name: 'dist', options: cleanOptions }),
    parts.babelTranspile(),
    parts.loadImages({ limit: 20000 }),
    parts.injectCSS(),
    parts.lintJS(),
  ]);

  return config;
};

module.exports = devConfig();
