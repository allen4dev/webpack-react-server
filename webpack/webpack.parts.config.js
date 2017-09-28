const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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

// Development
exports.injectCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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

exports.cleanDist = ({ name, options }) => ({
  plugins: [new CleanWebpackPlugin(name, options)],
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
