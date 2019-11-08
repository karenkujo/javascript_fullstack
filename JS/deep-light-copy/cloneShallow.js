// 浅拷贝
function cloneShallow(source) {
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key]
    }
  }
  return target
}
let a = {
  name: 'wn',
  book: {
    title: "You Don't Know Js",
    price: '45'
  }
}
let b = cloneShallow(a)
console.log(b)
a.name = '蜗牛'
a.book.price = '55'
console.log(b)