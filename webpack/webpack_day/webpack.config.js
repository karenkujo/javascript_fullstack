const path = require('path')

module.exports = {
  entry: "./index.js", // 入口文件
  output: { // 出口
    // 公共路径设置
    // publicPath: "",
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  }
}