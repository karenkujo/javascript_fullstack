const fs = require('fs')

const net = require('net');

// 创建客户端与udp不同
// net.Socket
// 1. new net.Socket()
// 2. net.createConnection

// 要连接的目标主机的地址与端口号
const clientSocket = net.createConnection(12345, '127.0.0.1')

// 监听数据传输
let tatalData = []
clientSocket.on('data', data => {
  // console.log('服务器返回：' + data)

  // clientSocket.write('get money')
  console.log(data)
  tatalData.push(data)
})

// 当数据接收完成的时候触发
clientSocket.on('end', () => {
  console.log('数据包接收完成')
  // 把接收到的数据组合起来
  const photo = Buffer.concat(tatalData)
  console.log(photo)
  fs.writeFile('alice1.png', photo, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('ok')
    }
  })
})