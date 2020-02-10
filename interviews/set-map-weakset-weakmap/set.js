// var s = new Set() // 类似数组，成员的值是唯一的  但无length属性  有size属性
// Array.from([2, 3, 4, 5, 6, 4, 2, 3]).forEach(x => s.add(x))

// for (let i of s) {
//   // console.log(i)
// }

// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
// console.log(items.size)

// // [...new Set(array)]
// // [...new Set('abcdabc')].join('')

// let set = new Set()
// let c = NaN
// let d = NaN
// set.add(c)
// set.add(d)
// console.log(set)


// let set1 = new Set();
// set1.add({});
// set1.size // 1
// set1.add({});
// set1.size // 2
// console.log(set1.size)

// let r = new Set()
// r.add(1).add(2).add(2)
// console.log(r.size)
// console.log(r.has(1))
// console.log(r.has(3))

// r.delete(2)
// console.log(r.has(2))

// const properies = {
//   'width': 1,
//   'height': 1,
// }
// if(properies[someName]) {
//   // ......
// }
// const properies = new Set()
// properies.add('width')
// properies.add('height')

// if (properies.has(someName)) {
//   // .......
// }

// const items = new Set([1, 2, 3, 4, 5])
// console.log(Array.from(items))


let set = new Set(['red', 'green', 'blue'])
// for (let item of set.keys()) {
//   console.log(item)
// }
// for (let item of set.values()) {
//   console.log(item)
// }
// for (let item of set.entries()) {
//   console.log(item)
// }
// set.forEach((value, key) => {
//   console.log(key + ' : ' + value)
// })

// Set.prototype[Symbol.iterator] === Set.prototype.values  // true


// let arr = [...set]
// console.log(arr)

// let testArr = [1, 2, 3, 4, 3, 2]
// let unique = [...new Set(testArr)]

let oSet = new Set([1, 2, 3])
// oSet = [...oSet].map((x => x * 2))
// oSet = Array.from(oSet).filter((x => (x % 2) == 0))
let b = new Set([4, 3, 2])
// 并集
let union =  new Set([...oSet, ...b])
// 交集
let intersect = new Set([...oSet].filter(x => b.has(x)))
// 差集
let difference = new Set([...Set].filter(x => !b.has(x)))
console.log(union)