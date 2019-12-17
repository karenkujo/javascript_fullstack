global.gc()
console.log(process.memoryUsage())

// 引用计数
let array = new Array(4 * 1024) // +1
// let map = new Map()
let map = new WeakMap() 
// WeakMap 即便 key 引用着 Array 但是 垃圾回收不把它考虑在内 依然回收Array
map.set(array, 4)
array = null // -1  计数为0 回收
global.gc()

console.log(process.memoryUsage())
console.log(map.get(array))