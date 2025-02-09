const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); //压缩css
module.exports = {
  mode: 'none',
  // entry: "./src/index.js", // 入口
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: "[name].bundle.js", // 出口
    path: path.resolve(__dirname, "dist"),
    clean: true, // 打包前清除dist打包目录
    assetModuleFilename: 'images/[contenthash].[ext]'
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
    splitChunks: {
      chunks: 'all',

    }
  },
  module: {
    rules: [{
      test: /\.png$/,
      type: 'asset/resource'
    }, {
      test: /\.jpg$/,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 10 * 1024
        }
      }
    }, {
      test: /\.svg$/,
      type: 'asset/inline'
    }, {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: 'body'
    }), // 生成html文件
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'
    }) //抽离css文件
  ],

}