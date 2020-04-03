// import './index.css'
import a from './a'
import b from './b'

b()
a()

if (module.hot) {
  module.hot.accept("./a", () => {
    console.log("有更进了")
    document.body.removeChild(document.getElementById('number'))
    a()
  })
}

// HMR 默认对css模块支持较好，
// 对js模块需要额外的处理，通过module.hot.accept来读必须要更新的模块进行监听

// var btn = document.createElement("button")
// btn.innerHTML = "新增"
// document.body.appendChild(btn)

// btn.onclick = function () {
//   var div = document.createElement("div")
//   div.innerHTML = "item"
//   document.body.appendChild(div)
// }