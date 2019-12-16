## call apply bind
都可以绑定this

call / apply
```js
  function foo (a, b) {
    foo()
    foo.call(this, a, b)
    foo.apply(this, [a, b])
  }
```
柯里化 (curry)

## this优先级
new > call/apply/bind



## bind
1. 绑定this
2. 处理参数
3. 处理new
4. 处理原型对象