const events = require('events')
const ev = new events()

ev.on('price', () => {
  console.log('123')
})
ev.on('price', () => {
  console.log('456')
})
// 发布
ev.emit('price')