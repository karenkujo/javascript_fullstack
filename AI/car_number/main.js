var AipOcrClient = require('baidu-aip-sdk').ocr // 图片识别？从图片中提取文字
var fs = require('fs')

var image = fs.readFileSync('./license.jpg').toString('base64')  // 文件本身就是二进制文本

var APP_ID = "17799051"
var API_KET = "vGwGboRHbwpCMpvaROVhk9e4"
var SECRET_KEY = "UaVF1Oj2TuGvaGT4cyXUEHExRRldjcry"

var client = new AipOcrClient(APP_ID, API_KET, SECRET_KEY)
var options = {}
client.licensePlate(image, options)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  })