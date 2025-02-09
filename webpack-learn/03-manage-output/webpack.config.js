const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'none',
  entry: "./src/index.js", // 入口
  output: {
    filename: "bundle.js", // 出口
    path: path.resolve(__dirname, "dist"),
    clean: true // 打包前清除dist打包目录
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: 'body'
    }) // 生成html文件
  ]
}