const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'mightyIframeIntegration.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'mightyIframeIntegration',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: 'production',
};
