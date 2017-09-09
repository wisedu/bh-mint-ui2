var cooking = require('cooking');
var webpack = require('webpack');
var config = require('./config');

cooking.set({
  entry: './example/entry.js',
  dist: './example/dist',
  template: './example/index.tpl',
  devServer: {
    port: 8790,
    host: require('my-local-ip')(),
    publicPath: '/',
    log: false,
    proxy: {
      '/emap/sys/student_app1.2/*default/index.do': {
        bypass: function(req, res, proxyOptions) {
          if (req.url.indexOf('index.do') > -1) {
            return '/index.html'
          } else {
            return req.url.replace('/emap/sys/student_app1.2/*default', '')
          }
        }
      } 
    }
  },
  clean: true,
  hash: true,
  publicPath: '/bh-mint-ui2/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: true,
  sourceMap: true,
  extends: ['vue2', 'lint', 'saladcss', 'buble'],
  alias: config.alias,
  externals: process.env.NODE_ENV === 'production' ? {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    'fastclick': 'FastClick'
  } : {}
});

cooking.add('loader.js.exclude', config.jsexclude);

if (process.env.NODE_ENV !== 'production') {
  cooking.add('plugins.Define', new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }));
}

module.exports = cooking.resolve();
