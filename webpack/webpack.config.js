const path = require('path')
const MiniCssEctractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    /*   {
        test: /\.css$/, // 匹配文件
        use: ['style-loader', 'css-loader'] // 指明使用什么加载器
      },
      {
        test: /\.scss$/, // 匹配文件
        use: ['style-loader', 'css-loader', 'sass-loader'] // 指明使用什么加载器
      }, */
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          /* 'style-loader', */
          MiniCssEctractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true}  // 显示样式源文件便于打包之后调试
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer')(),
                // 这里还能引入更多插件
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssEctractPlugin({
      filename: '[name].css', // 最终输出的文件名
      chunkFilename: '[id].css'
    })
  ]
}