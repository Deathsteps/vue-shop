var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')

var serverConfig = merge(baseWebpackConfig, {
  target: 'node',
  devtool: false,
  entry: './src/server-entry.js',
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      'actual-api': './actual-api-server.js'
    }
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    // related to comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'process.env.VUE_ENV': '"server"'
    })
  ]
})

module.exports = serverConfig
