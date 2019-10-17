触屏 重力感应  陀螺仪  手机区别于PC
touchstart touchmove touchend ;
- 让我们的阴影 感知力度？ 
- 那么多张树懒的照片？
- 摁压的力度作用到照片
-  雪碧图
    往右走  往下走都是负值
    background-size: 400%

- live-server
    http服务
    http协议是web的底层

- node  内建http模块
    http.createServer((req, res) => {
        console.log(req.url);
    }).listen(1314)
    一直伺服
    www.baidu.com   www.baidu.com:80

- http  fs  path  node内置模块
    index.html
    sloth.png
一切皆是资源   url表示
/           index.html
/images/sloth.png   sloth.png
区别  req.url       文件类型不一样   text/html    image
res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})