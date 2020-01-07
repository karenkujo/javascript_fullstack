# @babel/cli
提供babel所需命令行
# @babel/core
babel核心库
# @babel/preset-env
预设环境 搭配browserslistrc使用  兼容特定条件浏览器  支持编译一部分语法
# @babel/plugin-transform-runtime
优化代码 减少重复代码  从公共的地方引入代码
# @babel/polyfill
在入口文件引入  可转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象
若不需要引入整个包  再在babelrc里面配置preset