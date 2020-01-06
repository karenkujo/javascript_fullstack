const Koa = require('koa')
const KoaStatic = require('koa-static')
const Router = require('koa-router');
const router = new Router();
const app = new Koa()


app.use(KoaStatic(__dirname + '/static'))
let sessionTable = []
router.get('/login', (ctx, next) => {
  // 后端设置cookie
  // 验证通过 存住用户的登录状态 session
  // http 无状态
  sessionTable = [{
    sessionId: 0001,
    uid: 001,
    islogin: true
  }]
  ctx.cookies.set('sessionId', 0001, {
    maxAge: 1000 * 60
  })
  ctx.body = {
    code: 0
  }
})
router.get('/islogin', async (ctx) => {
 // 通过cookie
 // cookie会自动附加到请求头里面
 const sid = ctx.cookies.get('sessionId')
 const session = sessionTable.find(s => s.sessionId == sid)
 if (session) {
  const uid = session.uid
  ctx.body = {
    code: 0,
    uid
  }
 } else {
   ctx.body = {
     code: 1,
     msg: '未登录'
   }
 }
})
 
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(8080, () => {
  console.log('http://localhost:8080')
})