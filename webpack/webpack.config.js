const path = require('path')
const MiniCssEctractPlugin = require('mini-css-extract-plugin') // css 单独打包
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') // css压缩
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // js压缩
const HtmlWebpackPlugin = require('html-webpack-plugin') // html打包压缩
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 清理目录

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.[hash].js',
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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname, 'src/')],
        use: ['file-loader', {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: { progressive: true, quality: 65 },
            optipng: { enable: false },
            pngquant: { quality: '65-90', speed: 4 },
            gifsicle: { interlaced: false },
            webp: { quality: 75 }
          }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssEctractPlugin({
      filename: '[name].[hash].css', // 最终输出的文件名
      chunkFilename: '[id].[hash].css'
    }),
    new OptimizeCssAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true, // js没有变化就不压缩
      parallel: true, // 是否启用并行压缩
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      title: 'chino study', // 生成的文件标题
      filename: 'main.html',
      minify: { // 压缩选项
        collapseInlineTagWhitespace: true,  // 移除空格
        removeComments: true,  // 移除注释
        removeAttributeQuotes: true // 移除双引号
      }
    }),
    new CleanWebpackPlugin()
  ]
}