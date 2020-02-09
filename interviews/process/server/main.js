const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Header', '*')
  setTimeout(() => {
    res.end('hello')
  }, 1000)
})

server.listen(3333, () => {
  process.title = '程序员成长指北测试进程'
  console.log('进程id', process.pid)
})