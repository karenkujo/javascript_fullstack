## 深入理解Node.js中的进程与线程

- 前端的角度  来看待进程与线程
- node 进程  子进程  cluster  多核cpu的利用  GO
- pm2 线上node  运行进程管理
- docker 容器
- k8s

1. 从前端角度开始
  Node.js是单线程吗？
  不是
  js 是单线程  html css js vue jsx node koa
  java  主线程  开辟新的线程概念
  基于事件机制event  loop  回调   另一角度解决了能力
  单线程 js
  ajax？ 微软公司
  新的线程创造出来  ajax  单线程
  JS是单线程的，但是JS宿主浏览器(容器)，多进程(http img css js)，多线程
  注册在主线程  event 事件里
  线程之间可以相互通信
2. node 当前main.js   进程 《=》， process.pid
  服务器端天生就是多线程的，分布式的
  js 在服务器端执行  单线程的
  node是服务器端js执行的容器， node是多进程的，多线程的
  单线程  异步  IO  高性能高并发 

js 单线程， 容器 浏览器是多进程，多线程的
node.js 容器node  高并发  创建进程、线程

- 进程的两种方式 
  child_process  fork        web worker
  cluster   fork
  提升运行效率  利用cpu
  nginx  负载均衡