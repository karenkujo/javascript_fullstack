// Hook(钩子函数) 它可以在不编写class的情况下使用state内部的状态和react

// 使用state Hook
import React, { useState, useEffect } from 'react'

export default function HooksTest () {
  // useState(initialState), 接收初始状态，返回一个状态变量和它的更新函数，属性名可以自定义
  // 声明一个新的叫做 "count" 的 state 变量
  const [count, setCount] = useState(0)
  // 数据获取，设置订阅，以及手动更改React组建中的DOM -- 副作用
  useEffect(() => {
    document.title = `您点击了${count}次`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* 调用setCount,修改count状态 */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}