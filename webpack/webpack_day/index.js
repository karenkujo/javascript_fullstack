document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */"./click").then(({ default: func }) => {
    func()
  })
})


// import _ from 'lodash'
// console.log(_.join(["a", "b", "c"], "****"))  // 1MB



// import { add } from './a'

// add(1, 2)


// import React, { Component } from 'react';
// import ReactDom from 'react-dom'
// import Child from './index.jsx'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child />
//       </div>
//     );
//   }
// }

// ReactDom.render(<App />, document.getElementById('app'))

// import "@babel/polyfill"; // 以全局变量的方式注入进来的，window.Promise，
// 它会造成全局变量的污染
// @babel/plugin-transform-runtime 以插件的形式引入，不会造成全局变量污染，因此它也不会对类似的Array.proptotype.includes()进行polyfill

// let obj = {}
// const str = ""
// const arr = [new Promise(() => {}), new Promise(() => {})]
// arr.map(item => {
//   console.log(item)
// })


// import './index.css'
// import a from './a'
// import b from './b'

// b()
// a()

// if (module.hot) {
//   module.hot.accept("./a", () => {
//     console.log("有更进了")
//     document.body.removeChild(document.getElementById('number'))
//     a()
//   })
// }

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