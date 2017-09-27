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
