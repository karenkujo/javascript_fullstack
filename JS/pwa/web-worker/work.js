let sum = 0
for (let i = 0; i < 10000000; i++) {
  sum += i
}
this.postMessage(sum) // 将结果传递出去
// this.onmessage = function () {}
// console.log(this)