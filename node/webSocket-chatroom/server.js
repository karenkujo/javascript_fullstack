const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 3000
})
wss.on('connection', (ws) => {
  console.log('收到连接')
  ws.on('message', (msg) => {
    console.log('msg', msg)
    // 广播
    wss.clients.forEach(client => {
      client.send(msg)
    })
  })
})