// const ws = new WeakSet()
// ws.add({a: 1})
// console.log(ws)

// const a = [[1, 2], [3, 4]]
// const ws = new WeakSet(a)

// console.log(ws)

// weakset 可以接受一个数组或类数组作为参数，该数组的所有成员，都会自动成为weakSet实例对象的成员

// const b = [5, 6]
// const wn = new WeakSet(b)
// console.log(wn)

// 但是，传进来的数组的成员只能是对象或数组

const ws = new WeakSet()
const obj = {}
const foo = {}

ws.add(obj)
ws.delete(obj)
ws.add(foo)

console.log(ws.has(obj))
console.log(ws.size)

// WeakSet 没有size属性  也不能被遍历

const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}

// 保证了Foo的实例方法，只能在Foo的实例上调用  删除实例的时候，不用考虑foos，也不会出现内存泄漏。