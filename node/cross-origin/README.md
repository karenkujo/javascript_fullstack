## 跨域
浏览器的安全策略：
两个服务通信需要遵守同源策略：同协议，同域名，同端口号
同源才会让你发出请求
不同源 就产生跨域
http://localhost:8080/index.html
http://localhost.com/api/v1

baidu.com  api.baidu.com

## cors
cross-origin-resource-share
一个规范，允许服务器申明哪些源可以访问

    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-auth, content-type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS,PUT,PATCH',
    'Access-Control-Allow-Credentials': true  // 允许 cookie 传输的

## 请求的步骤
1、简单请求：直接发起跨域请求
2、非简单请求：先发起预检(preFlight)请求, 预先试探一下服务端支不支持跨域，之后才会发起正式的跨域请求

简单请求：表单可以构造的请求
非简单请求：表单无法构造的请求

## jsonP
link script img : 不受同源策略的影响