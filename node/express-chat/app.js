var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-type": "text/html"})
  const myReadStream = fs.createReadStream(__dirname + '/views/http_demo.html', 'utf-8')
  myReadStream.pipe(res)
})

var io = require('socket.io')(server)
io.on("connection", function (socket) {
  console.info('一个socket连接成功了')
  socket.on('link_to_server', function (msg) {
    console.info(msg)
    io.emit('link_to_client', msg)
  })
})

server.listen(8888, '127.0.0.1')
console.log('server is running...')