## 顺序
touchstart
touchmove
touchend
// 300ms
click

## 处理：
<meta name="viewport" content="width=device-width, initial-scale=1.0">
可以处理大部分浏览器移动端300ms延迟问题 如果不行可以使用以下方案(fastclick)
1、阻止touchend默认事件  并手动触发click事件
document.getElementById('Clickme')
    .addEventListener('touchend', function(e) {
      e.preventDefault()
      // 1、手动触发click事件
      // document.getElementById('Clickme').click()
      document.getElementById('end').innerHTML = Date.now()
    })
2、阻止touchend默认事件  并自定义click事件
document.getElementById('Clickme')
    .addEventListener('touchend', function(e) {
      e.preventDefault()
      // 2、自定义事件
      let event = document.createEvent('MouseEvents')
      // 第二个参数指的是是否阻止冒泡 第三个参数是否阻止事件默认行为
      event.initEvent('click', true, true)
      document.getElementById('Clickme').dispatchEvent(event) // 给ClickMe派发click事件
      document.getElementById('end').innerHTML = Date.now()
    })