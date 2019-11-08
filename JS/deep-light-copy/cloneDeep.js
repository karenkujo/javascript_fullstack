// 深拷贝
// function cloneDeep(source) {
//   if (typeof source !== 'object') {return source}
//   var target = Array.isArray(source) ? [] : {}
//   for (var key in source) {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       if (typeof source[key] === 'object') {
//         target[key] = cloneDeep(source[key])
//       } else {
//         target[key] = source[key]
//       }
//     }
//   }
//   return target
// }
// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Know Js",
//     price: function () {
//       console.log('45')
//     }
//   }
// }
// let b = cloneDeep(a)
// console.log(b)
// a.name = '蜗牛'
// a.book.price = [5, 6]
// console.log(b)



// 不使用递归的深拷贝
function cloneDeep2 (x) {
  const root = {}

  // 栈
  const loopList = [
    {
      parent: root,
      key: undefined,
      data: x
    } 
  ]

  while (loopList.length) {
    // 广度优先
    const node = loopList.pop()
    const parent = node.parent
    const key = node.key
    const data = node.data

    let res = parent // {}
    // 初始化赋值目标, key为undefined的话拷贝到父元素，否则拷贝到子元素
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }
    for (let k in data) {
      if (data.hasOwnProperty(k)) {
        if (typeof data[k] === 'object') {
          // 下一次循环
          loopList.push({
            parent: res,
            key: k,
            data: data[k]
          })
        } else {
          res[k] = data[k]
        }
      }
    }
  }
  return root
}

let a = {
  name: 'wn',
  book: {
    title: "You Don't Know Js",
    price: [4, 5]
  }
}
let b = cloneDeep2(a)
console.log(b)
a.name = '蜗牛'
a.book.price = [5, 6]
console.log(b)
