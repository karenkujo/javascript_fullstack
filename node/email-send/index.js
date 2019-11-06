const http = require('http')
const fs = require('fs')
const urlModule = require('url')
const nodemailer = require('nodemailer')
let code = 2333

// register  展示一个 注册html
// 注册成功之后  展示一个成功的html
http.createServer((req, res) => {
  const method = req.method
  const url = req.url
  const urlObj = urlModule.parse(url)
  console.log('url', url)
  if (url === '/register' && method === 'GET') {
    // req res 两个对象继承了 流 stream 和 事件 Event
    res.writeHead(200, {
      'Content-Type': 'text/html;utf8'
    })
    fs.createReadStream('./register.html').pipe(res)
  } else if (urlObj.pathname === '/sendEmail' && method === 'GET') {
    const emailQs = urlObj.query
    console.log('emailQs', emailQs)
    const email = emailQs.split('=')[1]
    const transport = nodemailer.createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '993698262',
        pass: 'ilhousahskkqbcjh'
      }
    })
    transport.sendMail({

      to: email,
      html: `<h2>${code}</h2>`,
      from: '993698262@qq.com',
      subject: 'XXX网站验证'
    }, (err, info) => {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      })
      if (err) {
        res.end(JSON.stringify({
          code: 500,
          email
        }))
      } else {
        res.end(JSON.stringify({
          code: 200,
          email
        }))
      }
    })
  } else if (urlObj.pathname === '/register1' && method === 'POST') {
    let data
    req.on('data', (c) => {
      data += c
    })
    req.on('end', () => {
      console.log('data', data)
      res.end(data)
    })
  } else {
    res.end('访问出错')
  }
})
.listen(3344, () => {
  console.log('server is running http://localhost:3344')
})