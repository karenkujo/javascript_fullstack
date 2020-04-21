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

# DOM 操作实在是太慢了
  1. 回流：当我们对DOM的修改引发DOM的几何信息发生变化 (比如修改元素的宽，高，隐藏元素等)时，浏览器需要重新计算元素的几何属性 (其它元素的几何信息也可能因此受到影响)，再将计算结果绘制出来，这个过程叫回流，也叫重排
  2. 重绘：当我们对DOM的修改导致了样式变化，却没有影响其几何属性 (比如修改了颜色或背景图片)时，浏览器不需要重新计算元素的几何属性，直接为改元素绘制新的样式 (跳过了上述的回流环节)。这个过程叫做重绘

  重绘不一定导致回流，回流一定会导致重绘

  回流是影响最大的
    1. 窗体，字体大小发生变化
    2. 增加样式表
    3. 内容变化
    4. class属性变化
    5. offsetWidth 和 offsetHeight
    6. fixed

# lazy-load

# Vue
  1. v-if 和 v-show
  初始化性能 vs 频繁切换性能

  2. 和渲染无关的数据，不要放在data上，data也不要嵌套太多层
  3. nextTick
      修改数据的当下，视图不会立刻更新，而是等同一时间循环中的所有数据变化完成之后，再统一进行视图更新
      this.$nextTick(() => {
        // dom 更新了
      })
  4. Object.freeze()
      冻结数据，取消setters

# react
  1. 只传递需要的props
      不要随便<Component {...props} />
  2. key 和 无状态组件
  3. pureComponent(渲染时机)  shouldComponentUpdate
  4. 少在render中绑定事件
  5. 长列表优化 --- react-virtualized

# 浏览器渲染
  1. 浏览器执行所有的家在解析逻辑，解析html的过程中发出了页面渲染所需要的各种外部资源请求
  2. 浏览器识别所有的css样式信息与DOM树合并，生成render树
  3. 页面中的所有元素的几何信息都在这一步去计算出来
  4. 这一步浏览器会根据我们的DOM代码结果，把每一个页面图层转换为像素，对所有的媒体文件进行解码
  5. 最后浏览器会合并各个图层，将数据由cpu  输出给GPU最终会绘制在屏幕上

# css

# 算法
    排序
    动态规划
  
# vue的dom diff 做了哪些优化
  1. vue中，使用defineProprety实际上是能够知道所有的数据的修改，知道那个数据修改了，然后去修改dom (Vue1.0就是这么做的)
  2. 虚拟dom是什么，数据修改后，我们通过dom diff算出哪个数据被修改了
  3. 我们有defineProperty为啥还需要虚拟dom

  vue1的问题是什么，每个数据都有监听器，watcher太多了，项目庞大之后问题尤其明显，vue2做了一个折中，watcher指导组件层面，一个组件只有一个watcher，组件内部使用dom diff

  4. vue的dom diff和react比，做了哪些优化
  web数组常见的修改
    1. 新增元素
    2. 删除元素
    3. 倒序排列一个元素

    所以每次遍历前，他会猜测一下
    的数组排头，新的数组排头，如果一样，直接进行更新元素逻辑，而不是用数组diff这个元素了
      中间新增一个元素
      老的数组排尾和新的数组排尾如果一样
      老数组的排头  新数组的排尾
      老数组的排尾  新数组的排头
      4波猜测对比，如果猜中，缩小了遍历的范围
      上面都没中，那就只能走遍历的逻辑