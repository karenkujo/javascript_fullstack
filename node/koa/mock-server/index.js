const Koa = require('koa');
const fs = require('fs')
const KoaRouter = require('koa-router')

const app = new Koa()
const router = new KoaRouter({prefix: '/api'}) // 前缀
router.get('/user', async (ctx) => {    // 以get方式请求的路由
  let userInfo = fs.readFileSync('./api/user.json').toString()
  ctx.body = {
    data: JSON.parse(userInfo),
    code: 200
  }
})

const glob = require('glob')
const path = require('path')
glob.sync(path.resolve('./api/', '*.json')) // path.resolve() 路径的拼接
.forEach((item) => {
  console.log(item) //  D:/javascript_fullstack/node/koa/mock-server/api/xxx.json
  let apiJsonPath = item && item.split('/api')[1]
  let apiPath = apiJsonPath.replace('.json', '')
  router.get(apiPath, async (ctx) => {
    let fileData = fs.readFileSync(item).toString()
    ctx.body = {
      data: JSON.parse(fileData),
      code: 200
    }
  })
})
// http://localhost:3000/api/user

// app.use 加载一个 中间件
// request -> middleWare1 -> middleWare2 -> response
// ctx: {request response}
// app.use(async (ctx) => {
//   ctx.body = {
//     code: 200,
//     msg: 'ok'
//   }
// })
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is running http://localhost:3000')
})