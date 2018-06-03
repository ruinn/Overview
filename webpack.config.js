const path = require('path');

const bundlePath = path.join(__dirname, 'public/');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015', 'env'] },
      },
    ],
  },
  output: {
    path: bundlePath,
    filename: 'bundle.js',
  },
};
