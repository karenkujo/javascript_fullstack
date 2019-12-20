# npm i webpack webpack-cli --save-dev

# dist 存放打包之后的文件

# src 存放入口文件

# wenpack.config.js  webpack的配置文件

style-loader   html引入css
css-loader   js引入css


webpakc中的 (module) 用来决定如何处理项目中的不同类型模块

webpack 模块支持的语法：
  es6 import 语句
  Commonjs require() 语句
  AMD define 和 require 语句
  css/sass/less 文件中的@import 语句
  样式 (url(...)) 或者 html文件(<img src="">)中的图片链接

# npm i postcss-loader autoprefixer --save-dev  给css添加前缀

postcss-loader 提供前缀
autoprefixer 进行浏览器的部分兼容补全

# 抽取样式将css单独打包