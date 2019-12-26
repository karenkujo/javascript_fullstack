// let notSure: any = 4
// notSure = 'wn'

// let value: any
// value = true
// value = 1
// value = 'hello'
// value = Symbol('type')
// value = {}
// value = []
// // ---------------------
// value.foo.bar
// value()
// new value
// value[0][1]

// let val: unknown
// val = true
// val = 1
// val = 'hello'
// val = Symbol('type')
// val = {}
// val = []
// // ------------------------------
// val.foo.bar
// val()
// new val
// val[0][1]


// never never类型是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
let test: string = "hello"
function error(message: string): never {
  throw new Error(message)
}
const empty: never[] = []
// empty.push(1)

// Array
const list: number[] = [1, 2, 3, 4]
const list2: Array<number> = [1, 2, 3, 4] // 泛型

// Tuple 元组
let x: [string, number, boolean]
x = ['Hello', 10, true]

// interface Tuple extands Array<string | number> {
//   0: string,
//   1: number,
//   length: 2
// }

// object
enum Direction {
  center = 1
}
let value: object

value = Direction
value = [1]
value = [1, 'hello']
value = {}