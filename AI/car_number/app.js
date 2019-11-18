var ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify // 图片分类
var fs = require('fs')

var APP_ID = "17798913"
var API_KET = "DO3Ow5MuYNxCEGkKEywoeVb0"
var SECRET_KEY = "3RUNwzVlvNHP3kI5oj1mzzCZo5ymn9C2"
// 内存  -> I/O
var image = fs.readFileSync('car.jpg').toString("base64") // 同步

var client = new ApiImageClassifyClient(APP_ID, API_KET, SECRET_KEY)

client.carDetect(image).then(function(result) {
  console.log(result)
})
.catch(function(err) {
  console.log(err)
})