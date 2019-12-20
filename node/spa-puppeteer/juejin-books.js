const puppeteer = require('puppeteer')
const $ = require('cheerio')
const nodeSchedule = require('node-schedule')

async function run() {
  const browser = await puppeteer.launch({
    headless: false // 默认为true只在后台运行   改为true时可有浏览器窗口显示
  })
  const page = await browser.newPage()
  await page.goto('https://juejin.im/books', {
    waitUntil: 'networkidle0'
  })
  const html = await page.content()
  const books = $('.info', html)
  // console.log(books)
  let totalSold = 0
  let totalSale = 0
  books.each(function() {
    const book = $(this)
    const price = $(book.find('.price-text')).text().replace('￥', '')
    const count = $(book.find('.message')).last().find('span').text().replace('人已购买', '')
    totalSale += Number(price) * Number(count)
    totalSold += Number(count)
  })
  console.log(`
    ${totalSold}人, ${totalSale}元
  `)
}

run()

// Promise.all([promise1, promise2]) => Promise
// 定时任务
const date = new Date(2019, 11, 20, 21, 9, 0)
const job1 = nodeSchedule.scheduleJob(date, () => {
  run()
})

const rule = new nodeSchedule.RecurrenceRule() // 自定义调度规则
rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6]
rule.hour = 21
rule.minute = 16
const job2 = nodeSchedule.scheduleJob(rule, () => {
  run()
})
