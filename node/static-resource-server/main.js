const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  const filePath = path.join(__dirname, req.url)
  fs.stat(filePath, (err, stats) => {  // 读取文件的属性
    if (err) {
      res.statusCode = 404
      res.end(`${filePath}: 404`)
      return
    }
    if (stats.isFile()) {   // 是文件
      res.statusCode = 200
      fs.createReadStream(filePath).pipe(res)
    } else if (stats.isDirectory()) {  // 是文件夹
      fs.readdir(filePath, (err, files) => {
        let filesLink = files.map(file => {
          return `<a href="${req.url === '/' ? '' : req.url + '/'}${file}">${file}</a><br />`
        }).join('')
        res.end(filesLink)
      })
    }
  }) 
})
.listen(9999, () => {
  console.log('http://localhost:9999')
})