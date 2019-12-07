const debounce = function (fn, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
  timer = setTimeout(() => {
    console.log(this)
      fn.apply(this, ...args)
    }, delay)
  }
}


let test = function () {
  console.log('111')
}

debounce(test, 500)