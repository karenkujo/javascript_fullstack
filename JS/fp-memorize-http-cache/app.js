var Koa = require('koa')
var Router = require('koa-router')
const md5 = require('md5')
 
var app = new Koa();
var router = new Router();
 
// 把磁盘上的文件路径映射为网络url
// app1.js   localhost:9999/app1.js
// app.use(koaStatic(__dirname))
router.get('/', (ctx, next) => {
  // ctx.router available
  ctx.body = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/app1.js"></script>
  </body>
  </html>
  `
});

let a = 0;
router.get('/app1.js', async (ctx) => {
  console.log('app1.js 请求', a ++)
  const fs = require('fs')
  const content = fs.readFileSync('./app1.js', 'utf-8')
  const stat = fs.statSync('./app1.js')
  console.log(stat)
  const etag = md5(content)
  // console.log(etag)
  const time = Date.now() + 1000 * 30 // 30s
  if (ctx.req.headers['if-none-match'] === etag) {
    ctx.status = 304
    ctx.body = ''
    return
  }
  if (ctx.req.headers['if-modified-since'] === stat.mtime) {
    ctx.status = 304
    ctx.body = ''
    return
  }
  ctx.set('cache-control', 'public,max-age=30') // 30s   public所有设备
  ctx.set('Etag', etag)
  ctx.set('Last-Modified', stat.mtime)
  ctx.body = content
})
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9999, () => {
  console.log(9999)
})