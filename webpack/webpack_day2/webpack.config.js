const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolveLoader: {
    modules: ["node_modules", "./loader"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "replaceLoader"
          },
          {
            loader: "replaceLoaderAsync",
            options: {
              name: '白羽'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: 'shiroha'
    })
  ]
}