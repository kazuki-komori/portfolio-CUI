const path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}