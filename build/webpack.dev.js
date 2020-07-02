const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar')
const resolve = src => path.resolve(__dirname, src)

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: resolve('../examples/main.js'),
  },
  output: {
    filename: '[name].[hash:8].js'
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    host: '127.0.0.1'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test:/\.vue$/,
        use:['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }, 'sass-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('../examples/index.html'),
      filename: 'index.html',
      inject: true,
    }),
    new WebpackBar()
  ]
}