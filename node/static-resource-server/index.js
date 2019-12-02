const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  // console.log(req.url)
  // png 多
  fs.createReadStream('./index.html').pipe(res)
  if (req.url === '/logo.png') {
    return ''
  }
})
.listen(3000, () => {
  console.log('server is running http://localhost:3000')
})