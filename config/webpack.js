var webpack = require('webpack');
var paths = require('./paths');
var FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: paths.src,
  output: {
    path: paths.dist,
    filename: 'wee.min.js'
  },
  resolve: {
    extensions: ['.js']
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, paths.dist],
        use: ['eslint-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: 'production',
      __DEV__: 'production'
    }),
    new FriendlyErrors({
      clearConsole: false
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
