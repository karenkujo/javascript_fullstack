// 入口
import React from 'react'
import ReactDom from 'react-dom'
/* import App from './App' */

// state
// class Counter extends React.Component {
//   constructor (props) {
//     // 初始化构造器时设置内部状态 num值为1
//     super(props)
//     this.state = {
//       num: 1
//     }
//   }
//   // 生命周期方法，组件渲染完成，只会执行一次
//   componentDidMount () {
//     console.log('componentDidMount函数触发')
//   }
//   // 生命周期方法，避免组件重复或者无意义的渲染
//   shouldComponentUpdate (nextProps, nextState) {
//     // console.log(nextProps, nextState)
//     if (nextState.num % 2) {
//       return true
//     }
//     return false
//   }
//   handleClick = () => {
//     this.setState({
//       num: this.state.num + 1
//     })
//   }
//   render () {
//     return (
//       <div>
//         <p>{this.state.num}</p>
//         <button onClick={this.handleClick}>click</button>
//       </div>
//     )
//   }
// }

// 表单
// 渲染列表
class TodoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: 'summer pockets',
      todos: ['Learn React', 'Learn-Ant-design', 'Learn Koa']
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  handleClick = () => {
    if (this.state.text) {
      this.setState( state => ({
        // 将text值追加到todos数组里面
        todos: [...state.todos, state.text],
        text: ''
      }))
    }
  }
  render () {
    return (
      <div>
        {this.state.text}
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleClick}>add</button>
        <ul>
          {this.state.todos.map( v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

// React V16  新增
// 1. render 函数支持返回数组和字符串
// 2. 异常处理，添加componentDidCatch钩子 (函数) 获取组件错误

class React16 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  render () {
    return (
      <div>
        {this.state.hasError ? <div>出错了</div> : null}
        <ClickWriteError />
        <FeatureReturnFeaments />
      </div>
    )
  }
}

// ClickWriteError是一个组件
class ClickWriteError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
  }
  handleClick = () => {
    this.setState({
      error: true
    })
  }
  render () {
    if (this.state.error) {
      throw new Error('出错了')
    }
    return <button onClick={this.handleClick} >抛出错误</button>
  }
}

class FeatureReturnFeaments extends React.Component {
  render () {
    return [
      <p key={1}>React很不错</p>,
      '文本1',
      <p key={2}>Antd也很赞</p>,
      '文本2'
    ]
  }
}

ReactDom.render(<React16 />, document.querySelector('#root'))
