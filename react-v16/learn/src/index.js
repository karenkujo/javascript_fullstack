// 入口
import React from 'react'
import ReactDom from 'react-dom'
/* import App from './App' */

// state
class Counter extends React.Component {
  constructor (props) {
    // 初始化构造器时设置内部状态 num值为1
    super(props)
    this.state = {
      num: 1
    }
  }
  // 生命周期方法，组件渲染完成，只会执行一次
  componentDidMount () {
    console.log('componentDidMount函数触发')
  }
  // 生命周期方法，避免组件重复或者无意义的渲染
  shouldComponentUpdate (nextProps, nextState) {
    // console.log(nextProps, nextState)
    if (nextState.num % 2) {
      return true
    }
    return false
  }
  handleClick = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render () {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

ReactDom.render(<Counter />, document.querySelector('#root'))
