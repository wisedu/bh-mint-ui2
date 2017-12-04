var cooking = require('cooking');
var config = require('./config');

cooking.set({
  entry: './src/index.js',
  dist: './lib/',
  clean: false,
  template: false,
  format: 'umd',
  minimize: true,
  moduleName: 'MINT',
  extractCSS: 'style.css',
  extends: ['vue2', 'saladcss', 'buble'],
  alias: config.alias,
  externals: config.pkg
});

cooking.remove('output.publicPath');
cooking.add('output.filename', 'bh-mint-ui2.common.js');
cooking.add('performance.hints', false);
cooking.add('loader.js.exclude', config.jsexclude);

module.exports = cooking.resolve();
