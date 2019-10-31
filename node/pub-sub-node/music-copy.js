const Event = require('events')
const request = require('request')
const inquirer = require('inquirer')
const fs = require('fs')
const ev = new Event()
// node music.js 内容
// console.log(process.argv)
function main(argv) {
  if (argv.length) {
    let search = argv[0]
    console.log(search)
    // 模块解耦
    ev.emit('search', search)
  }
}
ev.on('download', (id) => {
  request({
    url: `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
    json: true,
    method: 'GET'
  }, (err, res) => {
    const body = res.body
    console.log('地址', body.data[0].url)
    if(body.data && body.data[0] && body.data[0].url) {
      // 下载
      request(body.data[0].url).pipe(
        fs.createWriteStream(`./${id}.mp3`)
      )
    } else {
      console.log('没有找到这首歌, 请重选')
    }
  })
})
// select
ev.on('select', (songLists) => {
  // expand checkBox input
  inquirer.prompt([
    {
      type: 'list',
      name: 'song',
      message: `共有${songLists.result.songCount}首歌,回车下载`,
      choices: songLists.result.songs.map((song) => {
        return {
          value: song.id,
          name: song.name + (
            song.artists[0] ?
            song.artists[0].name : ''
            )
        }
      })
    }
  ])
  .then(id => {
    // console.log('选择了', id)
    id = id.song
    ev.emit('download', id)
  })
})
// 搜索模块
ev.on('search', (search) => {
  // /search?keywords=海阔天空
  // http
  search = encodeURIComponent(search)  // 编码
  request({
    method: 'GET',
    json: true,
    url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${search}`
  }, (err, res) => {
    if (err) {
      console.log('搜索出错', err)
    } else {
      // console.log(res.body)
      ev.emit('select', res.body)
    }
  })
})

main(process.argv.slice(2))