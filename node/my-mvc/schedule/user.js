module.exports = {
  interval: '*/9 * * * * *',
  handler () {
    console.log('定时任务 9秒执行一次' + new Date())
  }
}