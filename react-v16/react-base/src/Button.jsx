import React from 'react';

function Button(props) {
  let date = new Date().getTime()
  // 通知父组件
  const handClick = () => {
    console.log(123456)
  }
  const { type, children, receiveFromButton } = props
  // 父组件传递一个回调函数过来，子组件通过参数通知父组件
  receiveFromButton(date)
  return (
  <button onClick={handClick}
  className={type === 'primary' && 'primary-class'}
  >{children}</button>
  )
}


export default Button