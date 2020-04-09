const path = require('path')
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: path.resolve(__dirname, "./loader/replaceLoader.js"),
          options: {
            name: '白羽'
          }
        }
      }
    ]
  }
}