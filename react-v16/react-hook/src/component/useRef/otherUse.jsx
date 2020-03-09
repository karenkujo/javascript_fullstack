// useRef  获取DOM元素
// useRef  用来保存普通变量
import React, { useState, useEffect, useRef } from 'react';

function Example () {
  // inputEl这个变量是useRef的返回值，变量给谁当ref属性，就能表示该元素
  const inputEl = useRef(null)

  const onButtonClick = () => {
    inputEl.current.value = '姬野星奏'
    console.log(inputEl)
  }
  // --------------------------
  const [text, setText] = useState('白羽')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text
    console.log(textRef.current)
  })
  return (
    <div>
      <input ref={inputEl} type="text"/>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br />
      <hr />
      <input value={text} onChange={(e) => {setText(e.target.value)}} type="text"/>
    </div>
  )
}

export default Example