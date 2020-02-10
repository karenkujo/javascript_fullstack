// function Person(name) {
//   this.name = name
// }

// let p = new Person('wn')
// console.log(p.__proto__)
// console.log(Person.__proto__)
// console.log(Function.__proto__)

// var foo = {}
// var foo = new Object()
// var F = function () {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a) // valA
// console.log(foo.b) // undefined
// console.log(F.b) // valB
// console.log(F.a) // valA


// function Person (name) {
//   this.name = name
//   return {name}
// }
// let p = new Person('wn')
// console.log(p)

Array.prototype.method = function () {}
var myArray = [1, 2, 3, 4, 5, 6, 7]
myArray.name = '蜗牛'
for (let index of myArray) {
  console.log(index)
}
