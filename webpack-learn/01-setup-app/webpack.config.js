const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: '/src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build', 'dist'),
    clean: true
  },
  devServer: {
    static: '/dist'
  },
  module: {
    rules: [{
      test: /\.txt$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.less$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }, {
      test: /\.png|jpg|gif|svg|jpeg$/,
      exclude: /node_modules/,
      type: 'asset/resource'
    }, {

    }]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    }
  }
}