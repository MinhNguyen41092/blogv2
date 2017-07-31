const path = require('path');
module.exports = {
  // Specifies the entry file where the bundler starts the bundling process.
  entry: './src/index.js',
  // Specifies the location where the bundled Javascript code is to be saved.
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
