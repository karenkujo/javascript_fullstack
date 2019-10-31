const fs = require('fs')
fs.readFile('./index.html', (err, data) => {
  // data 放到内存里
  fs.writeFile('./index-copy.html', data, (err, res) => {
    if (!err) {
      console.log('writed!!!')
    }
  })
})
// stream
// 100GB 读一点写一点 非一次性
fs.createReadStream('./music.js')
.pipe(
  fs.WriteStream('./music-copy.js')
)