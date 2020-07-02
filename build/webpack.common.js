const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');
const resolve = src => path.resolve(__dirname, src)
const WebpackBar = require('webpackbar')
module.exports = {
  mode: 'production',
  entry: {
    app: [resolve('../src/index.js')]
  },
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    filename: 'tl.common.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'TL',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
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
    new VueLoaderPlugin(),
    new WebpackBar()
  ]
}