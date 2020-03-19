// 独立对象，创建2个  一个是xiaowang，一个是xiaoli
// 让xiaoli跟xiaowang 通过门铃进行通信
// 先看 xiaowang 家有没有门，如果有门，直接敲门，如果没有门，先建门
// 两个单例开始通信

var xiaowang = (function (argument) {
  var Xiaowangjia = function(message) {
    this.menling = message
  }
  var men
  var info = {
    sendMessage: function (message) {
      if (!men) {
        men = new Xiaowangjia(message)
      }
      return men
    }
  }
  return info
})()

var xiaoli = {
  callXiaowang: function () {
    var _xw = xiaowang.sendMessage()
    alert(_xw)
  }
}