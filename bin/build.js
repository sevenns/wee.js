var paths = require('../config/paths');
var rmrf = require('rimraf');
var webpack = require('webpack');
var webpackConfig = require('../config/webpack');

var compiler = webpack(webpackConfig);

rmrf(paths.dist, function (rmrfError) {
  if (rmrfError) {
    process.exitCode = 1;
  }

  compiler.run(function (compilerError, stats) {
    if (compilerError || stats.hasErrors()) {
      process.exitCode = 1;
    }

    console.log(stats.toString({
      builtAt: false,
      entrypoints: false,
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
      hash: false,
      version: false,
      timings: false
    }) + '\n\n');
  });
});
