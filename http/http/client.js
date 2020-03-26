const http = require('http')
const fs = require('fs')

// http.ClientRequest 类
// new http.ClientRequest()
// http.request

// 创建一个客户端(能发http请求的)对象
// 请求行：get, http://127.0.0.1:80/ http/1.1
const client = http.request({
  // tcp
  host: 'www.baidu.com',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/img/bd_logo1.png?where=super'
}, (res) => {
  // 这个函数会在服务器响应的时候触发
  // res => socket
  // let content = ''
  let content = Buffer.alloc(0)
  res.on('data', (data) => {
    // console.log(data.toString())
    // content += data.toString()
    content = Buffer.concat([content, data], content.length + data.length)
  })
  res.on('end', () => {
    fs.writeFileSync('./baidu.png', content)
  })
})

// 请求的发送需要调用下面的方法
client.write('')
client.end()