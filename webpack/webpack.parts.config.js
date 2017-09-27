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
