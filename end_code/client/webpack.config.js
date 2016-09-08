var autoprefixer = require('autoprefixer');

config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/,loader: 'style-loader!css-loader!postcss-loader'}
    ]
  },
  postcss: function () {
    return [autoprefixer];
  }
}

module.exports = config;