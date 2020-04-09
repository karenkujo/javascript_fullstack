const webpack = require('webpack')


const devConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map", 
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./dist",
    open: true,
    port: "8081",
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true,
    hotOnly: true
  },
  optimization: {
    usedExports: true,
    splitChunks: { // 代码分割
      chunks: "all",
      minChunks: 1,  // 引用次数
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: "lodash.js",
          priority: -10  // 优先级  数字越大，优先级越高
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = devConfig