## webpack 1.0

## webpack 2.0
拆分文件体积，
配置很多

rollup: (tree-shaking) 各种工具类库 比如vue。。

## webpack 3.0

parcel：(0 配置)

## webpack 4.0

0 配置

国内 百度(fis) 

## tree-shaking
剔除无用代码

条件：
1. 导入导出，必须使用 es module (import export)
   小心一些第三方模块可能用的是 commonJS 规范

## mode
development
production
webpack 根据两个模式，内置了一些默认的配置

production：自动开启 tree-shaking 功能

## es module & commonjs

es6 module化方案：在js编译的时候，就知道引入了哪些模块，不能够出现在任何逻辑判断里面，静态引入
注：es(6+) import() 支持了动态引入
commonJS：只有在js执行的时候才知道引入了哪些模块，动态引入
