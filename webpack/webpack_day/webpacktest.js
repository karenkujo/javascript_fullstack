const path = require('path')

module.exports = {
  entry: "./index.js", // 入口文件
  output: { // 出口
    path: path.resolve(__dirname, "./build"),
    filename: "lm.js"
  }
}