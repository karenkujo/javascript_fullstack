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


文件缓存虽然js控制不到，浏览器控制的，我们可以通过工程化，来更高效地利用缓存

如何高效利用缓存
如何上线前端代码

1. 缓存时间过长
    1. 发布上线了，用户还在用缓存，会有bug
2. 缓存时间过短
    1. 重复加载的文件太多，浪费带宽

模板 (html)

静态资源 (css, js, img, video, audio)  需要分开上线

1. 模板或者html不能有缓存
    1. 这是入口，我们一旦有新代码发布上线，如果缓存就没法加载新资源
2. 文件加哈希
    1. 上线之后要求用户强制刷新这种问题，用文件名加hash的方式解决了
    2. a.hash.js  hash是整个a.js文件的md5值，文件内容不变，hash不变，缓存生效。文件内容变，缓存变，文件的名都变了 ---- a.hash1.js => a.hash2.js 肯定重新加载。所有的静态资源文件，缓存时间设置地很长

1. 加时间戳 <script src="/a.js:_t=xxxx"></script>
2. 加版本号 <script src="/a.js:_v=1.0"></script>
3. 加指纹 但是不产生新文件 <script src="/a.js:_h=avas3211"></script>
4. 最终  诞生的最优  产生新文件 <script src="/a.uf65ia65sh.js"></script>
5. webpack build 