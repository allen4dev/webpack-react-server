const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Common
exports.babelTranspile = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
});

exports.loadImages = options => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

exports.lintJS = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
      },
    ],
  },
});

// Client
exports.extractCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'app.css',
    }),
  ],
});

// Server
exports.transformHTML = () => ({
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'template-string-loader',
      },
    ],
  },
});

exports.readCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
});
