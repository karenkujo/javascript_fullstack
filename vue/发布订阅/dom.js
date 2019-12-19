// {
//   tag: 'div',
//   children: [
//     {
//       tag: 'a',
//       text: 'click me'
//     }
//   ]
// }

// <div>
//   <div>click me</div>
// </div>

// 为什么要依赖收集?
new Vue({
  template: `
    <div>
      <span>{{text1}}</span>
      <span>{{text2}}</span>
    </div>
  `,
  data: {
    text1: 'text1',
    text2: 'text2',
    text3: 'text3',
  }
})

this.text3 = 'vdsijimhmh' // render函数不需要执行