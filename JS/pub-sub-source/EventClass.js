const subPub = {
  'price': [
    () => { console.log(3) },
    () => { console.log(4) }
  ]
}
// 把price对应的方法执行一遍
for(let fn of subPub.price) {
  fn()
}
function foo() {
  console.log('foo')
}

// foo: [ foo ]
// 在subPub上添加一个 value 为数组的 key (foo)
// 把foo方法 放到数组里面去
subPub['foo'] = [ foo ]
console.log(subPub)


class Events {
  constructor() {
    this.listener = {}
  }
  on(key, fn) {
    if (!this.listener[key]) {
      this.listener[key] = []
    } 
    this.listener[key].push(fn)
  }
  emit(key) {
    console.log(this.listener[key])
    if (this.listener[key]) {
      for (let fn of this.listener[key]) {
        fn()
      }
    }
  }
}
const ev = new Events()
ev.on('price', () => { console.log(1)})
ev.on('count', () => { console.log(2)})
ev.emit('count') // 执行的