const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./index.js", // 入口文件
  output: { // 出口
    // 公共路径设置
    // publicPath: "",
    path: path.resolve(__dirname, "./build"),
    filename: "index.js"
  },
  module: {
    // 遇到不认识的模块，就在这里找loader
    rules: [
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          // url-loader 可以先定模块的体积，根据体积判断是否需要转换base64，减少http请求
          loader: "url-loader", // 就是把模块放在了另外一个目录里面。并且把位置给我们返回
          options: {
            // name 是打包前模块的名称，ext是打包前模块的后缀名
            name: "[name]_[hash].[ext]",
            outputPath: "images/",
            limit: 1024 * 300
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.scss$/, // loader是有执行顺序的，从后往前
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [ new HtmlWebpackPlugin({
    template: "./index.html",
    title: "标题-自己取的",
    filename: "app.html"
  })]
}