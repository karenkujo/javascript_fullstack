## cookie
1. 前端设置cookie
    document.cookie = 'islogin=true;max-age=60'

2. 后端设置
  router.get('/login', (ctx, next) => {
  ctx.cookies.set('islogin', true, {
    maxAge: 1000 * 60
  })
  ctx.body = {
    code: 0
  }
  });
  本质上是设置的响应头
  在cookie未过期的情况下，前端发出请求头会自动带上cookie