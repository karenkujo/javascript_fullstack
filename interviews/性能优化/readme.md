# 前端性能优化

从输入url到页面渲染完成，发生了什么？

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