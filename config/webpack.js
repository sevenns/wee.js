var webpack = require('webpack');
var paths = require('./paths');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: paths.src,
  output: {
    path: paths.dist,
    filename: 'weery.min.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js']
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: { ecma: 5 }
      })
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
