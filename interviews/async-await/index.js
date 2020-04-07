let p = Promise.resolve(1);
let p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(234)
  }, 2000)
})
function* test() {
  let a = yield p;
  console.log(a)
  let b = yield p2;
  console.log(b);
}
// 执行 generate   而且保证顺序
function asyncToGenerate(gen) {
  let g = gen()
  function step(value) {
    let info = g.next(value)
    console.log(info.value)
    if (info.done) {
      return
    } else {
      Promise.resolve(info.value).then((res) => {
        // 下一个yield
        step(res)
      })
    }
  }
  step()
}

asyncToGenerate(test)