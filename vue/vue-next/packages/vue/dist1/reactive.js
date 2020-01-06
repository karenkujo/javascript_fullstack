// vue3.0 响应式原理
// 1）vue2.0会默认递归， 2）数组改变length是无效的， 3）对象不存在的属性不能被拦截


let toProxy = new WeakMap() // 弱引用映射表, 放置的是被代理过的对象
let toRaw = new WeakMap() // 被代理过的对象：原对象


// 判断是不是对象
function isObject(val) {
  return typeof val === 'object' && val !== null
}
function hasOwn(target, key) {
  return target.hasOwnProperty(key)
}

// 响应式的核心方法
function reactive(target) {
  // 创建响应式的对象
  return createReactiveObject(target)
}

// 创建响应式的对象
function createReactiveObject(target) {
  if (!isObject(target)) { // 如果当前不是对象，直接返回
    return target
  }

  let proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  if (toRaw.has(target)) { // 防止代理过的对象再次被代理
    return target
  }

  let baseHandler = {
    // Reflect 不会报错 而且 会有返回值 会替代掉 Object上的方法
    get (target, key, receiver) {
      // proxy + reflect 反射
      // console.log('获取')
      let result = Reflect.get(target, key, receiver)
      console.log('aaa')
      return isObject(result) ? reactive(result) : result // 递归
    },
    set (target, key, value, receiver) {
      // 如果设置没成功，如果这个对象不可被更改 writable
      // 怎么识别是修改属性还是新增属性
      let hadKey = hasOwn(target, key) // 判断这个属性以前有没有
      let oldValue = target[key]
      // console.log(oldValue, value)
      if (!hadKey) {
        console.log('新增属性')
      } else if (oldValue !== value) {
        console.log('修改属性')
      }
      let res = Reflect.set(target, key, value, receiver)
      return res
    },
    deleteProperty (target, key) {
      let res = Reflect.deleteProperty(target, key)
      return res
    }
  }

  let observed = new Proxy(target, baseHandler)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}

// 代理对象
let arr = [1, 2, 3];
let proxy = reactive(arr)
// proxy[0] = 1111
proxy.push(4)

let obj = {
  name: {
    a: 'wn'
  }
}
let proxy1 = reactive(obj)
proxy1.name.a = 'ww'

// let proxy = reactive([1, 2, 3])
// proxy.push(4)
// console.log(proxy)
// let object = {
//   name: {
//     n: 'wn'
//   }
// }
// let proxy = reactive(object) // 多层代理，通过get方法 来判断

// // console.log(proxy)
// reactive(object)
// reactive(object)
// reactive(object)
// reactive(object)
// proxy.name.n = 'www'

// 记录一下这个对象是否已经被代理过，如果是，就不要在new 了
// hash 表 （映射表）
