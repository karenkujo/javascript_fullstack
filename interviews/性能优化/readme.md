# 前端性能优化
  1. 文件获取优化
  1. 加载文件 css js 
  2. http 协议的细节
  3. 从输入url到页面渲染完成，发生了什么
  4. 大厂怎么上线前端代码




2. 代码执行优化
  1. 防抖节流
  2. 回流重绘
  3. vue react (ssr) 常见的优化 代码执行地更少，dom操作地更少
  4. 浏览器是如何渲染页面的
  5. vue源码做过哪些执行层面的优化

# 从输入url到页面渲染完成，发生了什么？

1，用户输入 baidu.com
2，浏览器通过 DNS 解析，把url解析为ip
3，和ip地址建立TCP链接  发送http请求
4，服务器接收请求，查库，读文件，拼接好返回的http响应
5，浏览器收到首屏的html，开始渲染
6，解析html为dom
7，解析css为css-tree
8，dom + cssom 生成render-tree 绘图
9，加载script的js文件
10，执行js

所谓的性能优化，就是以上的步骤加在一起，时间尽可能的短，所以基本也就是两大方向
1. 少加载文件
2. 少执行代码

# 浏览器的缓存机制
  广义上来说， 缓存可以分为4个
  1. http cache
  2. Service Worker cache
      独立于主线程之外的js线程，脱离浏览器窗体，算是幕后工作者，可以实现离线缓存等功能
  3. Memory cache
      内存缓存，短命，比如我们把数据存在js里，浏览器也有自己的策略，base64图片，体积小的静态资源

  4. Push cache
      http2的缓存

# 文件打包 
    分析文件大小  比如：删除冗余的代码  tree shaking, 和去除无效代码，【webpack系列】

# 图片优化
  图片是非常占流量的，PC端平均加载的图片大小600k，简直比js包还大，所以针对图片优化，收益巨大
  1. jpg
    1. 有损压缩
    2. 不支持透明
    3. 用于背景图，轮播图
  2. png
    1. 无损压缩，质量高，支持透明
    2. 色彩线条更丰富，通常用于一些小图，比如logo，商品icon
  3. svg
    1. 文本，体积小矢量图
    2. 渲染成本高，学习成本高
  
图片打包，雪碧图，减少http请求次数

gzip(线上一定要打开) accept-encoding: gzip  开启gzip

# 本地存储
  cookie localStorage sessionStorage indexDB
  1. cookie
    1. 最早， 体积限定，性能浪费，一般来说所有的请求都会带上当前域名的cookie
  2. Web Storage
    1. localStorage(持久化) 和 sessionStorage(会话级)
    2. 存储量大，不自动发给服务器，js控制
  3. indexDB
    1. 运行在浏览器上的非关系型数据库
  4. PWA
    1. 基于缓存技术的应用模型

# 服务端渲染ssr
  ssr.js

# 雅虎军规
  https://www.cnblogs.com/xianyulaodi/p/5755079.html

# 性能监控 Proformance
  performance.getEntriesByType('navigation')
  https://developer.mozilla.org/zh-CN/docs/Web/API/Performance_API

# 节流防抖