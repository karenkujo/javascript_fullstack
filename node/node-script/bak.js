const shell = require('shelljs')
const moment = require('moment') // 日期处理类库
const schedule = require('node-schedule')

// node 定时任务模块 node-schedule
function copy() {
  const current = moment().format('YYYYMMDDhhmmss')
  const folder = `src_${current}`
  // 先创建一个时间信息的文件夹，防止文件覆盖
  shell.mkdir('-p', './bak/' + folder)
  // shell 复制文件或者文件夹
  shell.cp('-rf', './test', './bak/' + folder)
}

schedule.scheduleJob('00 00 00 * * *', () => {
  copy()
})

// 自动执行命令
// shell.exec('cls') // 执行windows下的清空显示命令
// shell.exec('npm run bak')
shell.exec('node --version', {
  silent: true, // 执行过程中命令提示符不会显示过程信息
  async: false, // 不要异步执行
}, (code, student, stderr) => {
  // 执行完毕后继续执行这里的回调函数
  // 自动修改内容
  // shell.sed('-i', 'version', 'aa', './version.js') // -i 表示不创建备份, version 表示需要替换的内容, aa 表示替换的新内容, ./version.txt 表示文件路径
  shell.sed('-i', /version\s=/, 'v =', './version.js')
  const content = shell.cat('./version.js')
  // console.log(content)
  // 最后一位每次打包自动加1
  const rep = content.stdout.split('.')
  // 接受控制台输入
  process.stdout.write("需要变更版本号吗(y/n)")
  process.stdin.on('data', (input) => {
    input = input.toString().trim()
    if (['Y', 'y', 'YES', 'yes'].indexOf(input) > -1) {
      rep[rep.length - 1] = parseInt(rep[rep.length - 1]) + 1 + "'"
      shell.sed('-i', content.stdout, rep.join('.'), './version.js')
    }
    if (['N', 'n', 'NO', 'no'].indexOf(input) > -1) {
      shell.exit(0)
    }
  })
})
