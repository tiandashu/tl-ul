const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const config = require('./config');
const { loadavg } = require('os');
const resolve = src => path.resolve(__dirname, src)

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
        test: /.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            compilerOptions: {
              preserveWhitespace: false
            },
          }
        }
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}