const http = require('http')


const client = http.request({
  // tcp
  host: '127.0.0.1',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/'
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })
})

// 请求的发送需要调用下面的方法
client.write('')
client.end()