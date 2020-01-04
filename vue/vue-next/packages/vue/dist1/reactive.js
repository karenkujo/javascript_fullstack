// vue 3.0 响应式原理
// 1、Vue 2.0会默认递归 2、数组改变length或者通过通过索引修改是无效的 3、对象不存在的属性不能被拦截

// 判断是不是对象
function isObject(val) {
  return typeof val === 'object' || val !== null
}

// 响应式的核心方法
function reactive(target) {
  // 创建响应式的对象
  return createReactiveObject(target)
}
// 创建响应式的对象
function createReactiveObject(target) {
  if (!isObject(target)) { // 如果当前不是对象
    return target
  }

  let baseHandler = {
    // Reflect 不会报错而且会有返回值 会替代掉 Object上的方法
    get (target, key, receiver) {
      // proxy + reflect 映射
      return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
      // 如果设置没成功，如果这个对象不可被更改(writable: false)
      return Reflect.set(target, key, value, receiver)
    },
    deleteProperty (target, key) {
      return Reflect.deleteProperty(target, key)
    }
  }

  let observed = new Proxy(target, baseHandler)
  return observed
}

// let proxy = reactive({num: [1, 2, 3]})
// proxy.num[3] = 4
// console.log(proxy)

let object = {
  name: {
    n: 'wn'
  }
}
let proxy = reactive(object)
proxy.name.n = 'www'
console.log(proxy)