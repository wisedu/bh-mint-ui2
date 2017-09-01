var Components = require('../components.json');
var path = require('path');
var dependencies = require('../package.json').dependencies;
var externals = {};
var pkg = {};
Object.keys(Components).forEach(function(key) {
  externals[`bh-mint-ui2/packages/${key}/index.js`] = `bh-mint-ui2/lib/${key}`;
  externals[`bh-mint-ui2/packages/${key}/style.css`] = `bh-mint-ui2/lib/${key}/style.css`;
});
Object.keys(dependencies).forEach(function(key) {
  externals[key] = key;
  pkg[key] = key;
});
exports.externals = Object.assign({
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}, externals);
exports.pkg = Object.assign({
  vue: 'vue'
}, pkg);

exports.alias = {
  'bh-mint-ui2': path.join(__dirname, '..'),
  'src': path.join(__dirname, '../src')
};

exports.jsexclude = /node_modules|lib/;

exports.extends = ['vue2', 'saladcss', 'buble'];

