// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(b)

// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Know Js",
//     price: '45'
//   }
// }
// let b = a
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// let a = {name: '蜗牛'}
// let b = {age: 18}
// let c = Object.assign(a, b)
// console.log(c)

// let a = {
//   name: 'wn',
//   book: {
//     title: "You Don't Know Js",
//     price: '45'
//   }
// }
// let b = Object.assign({}, a)
// let b = {...a}

// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// let a = [0, '1', [2, 3]]
// let b = a.slice(1)
// a[2][0] = 4
// console.log(b)


let a = {
  name: 'wn',
  book: {
    title: "You Don't Know Js",
    price: '45'
  }
}
let b = JSON.parse(JSON.stringify(a))
a.book.price = '55'
console.log(b)