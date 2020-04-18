get / http1.1
refer: 
user-agent
etag
cache-control


http 响应
Content-Length: 7877长度
空行
body <html>
  标题信息 都是http body
</html>

DNS 预加载

1. 如何少加载文件
    1. 合理利用缓存

main.js加载来看待这个问题
1. 首次加载  http请求， server正常返回
    1. 返回响应头加上强缓存说明 (针对时间)
    2. Expires: Sat 11 May 2020 16:04:00 (过期时间)
    3. catch-control: max-age=34564564  (相对时间) 优先级高
    4. 两个header都是浏览器告诉后端，这个文件多少时间内不过期
    5. 浏览器接收到上面两个header，就会把文件存起来

2. 1个小时内再请求这个文件
    1. 浏览器识别到强缓存命中，请求不发出，直接用本地的缓存文件 状态码200 from cache

3. 2个小时后，再次请求这个文件，强缓存失效，使用协商缓存
    1. 浏览器不会直接发出请求，而是问一下后端，header带上请求头
      1. if-modfile-since: 日期  问一下后端这个文件在这个时间之后有没有修改过
      2. 后端会告诉你  没改过 请用缓存  响应304 not modfile
      3. 浏览器直接用缓存
      4. 优先级更高的 etag  文件指纹， 内容不变 指纹不变
      
4. 后端告诉你改过了  只能重新加载