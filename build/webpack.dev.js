const { merge } = require('webpack-merge');
const common = require('./webpack.base');
const path = require('path');
const apiMocker = require('webpack-api-mocker');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // 入口页面所在文件夹
    contentBase: '../public',
    // 将所有请求都打回index.html，因为此处配置是单页面应用
    historyApiFallback: true,
    // 本地mock数据配置，mock数据配置在mocker.js中
    before: function(app) {
      apiMocker(app, path.resolve('public/mocker.js'));
    },
    // 监听端口
    port:8889,
    // 启动后自动打开网址
    open: 'http://localhost:8889/',
  },
  output: {
    filename: 'js/[name].[hash:5].js',
    path: path.resolve(__dirname, '../dist')
  }
});