// - hash  webworker  计算hash  新创建线程
const http = require('http')
const fork = require('child_process').fork // 创建新的进程

const server = http.createServer((req, res) => {
  const compute = fork('./fork_compute.js')
  compute.send('开启一个新的进程吧')
  compute.on('message', sum => {
    res.end(`和为${sum}`)
  })
})

server.listen(1315, () => {
  process.title = '程序员成长指北测试进程'
  console.log('进程pid', process.pid)
})