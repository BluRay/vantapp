const defaultSettings = require('./src/settings.js')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const name = defaultSettings.title
const port = 8083
module.exports = {
  publicPath: '/vant/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      ['/appapi']: {
        target: `http://10.23.5.150:8082`,
        changeOrigin: true,
        pathRewrite: {
          ['^/appapi']: ''
        }
      }
    },
    disableHostCheck: true
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
