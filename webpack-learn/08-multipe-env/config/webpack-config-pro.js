const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //压缩css
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  mode: 'production',
  output: {
    filename: "js/[name].[contenthash].js", // 出口
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
    minimize: true,
  },
  performance: {
    hints: false
  }
}