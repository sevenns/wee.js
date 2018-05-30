// var createVariants = require('parallel-webpack').createVariants;
var webpack = require('webpack');
var paths = require('./paths');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var FriendlyErrors = require('friendly-errors-webpack-plugin');

var config = {
  mode: 'production',
  entry: paths.src,
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

var global = Object.assign({}, config, {
  output: {
    path: paths.dist,
    filename: 'weery.min.global.js',
    library: '$',
    libraryTarget: 'global'
  }
});

var commonjs = Object.assign({}, config, {
  output: {
    path: paths.dist,
    filename: 'weery.min.module.js',
    library: 'Weery',
    libraryTarget: 'commonjs2'
  }
});

module.exports = [global, commonjs];

// module.exports = createVariants({
//   target: ['global', 'commonjs2']
// }, function (options) {
//   return {
//     mode: 'production',
//     entry: paths.src,
//     output: {
//       path: paths.dist,
//       filename: 'weery.min.' + options.target + '.js',
//       library: '$',
//       libraryTarget: options.target
//     },
//     resolve: {
//       extensions: ['.js']
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: [/node_modules/, paths.dist],
//           use: ['eslint-loader']
//         }
//       ]
//     },
//     optimization: {
//       minimizer: [
//         new UglifyJsPlugin({
//           cache: true,
//           parallel: true,
//           uglifyOptions: { ecma: 5 }
//         })
//       ]
//     },
//     plugins: [
//       new webpack.DefinePlugin({
//         NODE_ENV: 'production',
//         __DEV__: 'production'
//       }),
//       new FriendlyErrors({
//         clearConsole: false
//       }),
//       new webpack.NoEmitOnErrorsPlugin()
//     ]
//   };
// });
