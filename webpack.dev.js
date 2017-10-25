const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const proxy = require('./env')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin({
      proxy: proxy,
      notify: false,
      open: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
