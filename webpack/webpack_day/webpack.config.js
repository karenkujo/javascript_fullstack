const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

module.exports = {
  // mode: "development",
  mode: "production",
  entry: "./index.js", // 指定打包的入口
  // 指定打包后的资源位置
  output: {
    // 公共路径设置
    // publicPath: "https://cdn.baidu.com",
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
  },
  // devtool: "cheap-module-eval-source-map", // 开发环境
  devtool: "cheap-module-source-map", // 线上环境
  module: {
    // 遇到不认识的模块，就在这里找loader
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          // url-loader 可以限定模块的体积，根据体积判断是否需要转换base64，减少http请求
          loader: "url-loader", // file-loader 就是把模块，放在了另外一个目录里面，并且把位置为我们返回
          options: {
            // name 是打包前模块的名称，ext是打包前的模块格式
            name: "[name]_[hash].[ext]", // timg.jpeg
            outputPath: "images/",
            // 24119
            limit: 24120
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
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   // "presets": [
          //   //   ["@babel/preset-env",
          //   //     {
          //   //       useBuiltIns: "usage", // 按需加载
          //   //       corejs: 2
          //   //     }
          //   //   ]
          //   // ],
          //   "plugins": ["@babel/plugin-transform-runtime"]
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      title: "标题-自己取的",
      filename: "index.html"
    }),
    // 在打包之前，先帮我们把上一次生成的目录删除
    new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "[name].css"
    // }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./build",
    open: true,
    port: "8081",
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true,
    hotOnly: true // 即使HMR不生效，浏览器也不会自动刷新
  },
  optimization: {
    usedExports: true
  }
}