import React, { Component } from 'react'

// 高阶组件链式调用
const withName = Comp => {
  class NewComponent extends Component {
    componentDidMount () {
      console.log('do something')
    }
    render () {
      return <Comp {...this.props} name="高阶组件使用" />
    }
  }
  return NewComponent
}

const withLog = Comp => {
  console.log(Comp.name + '渲染了')
  return props => <Comp {...props} />
}

// ES6装饰器简化高阶组件的写法 必须要安装"@babel/plugin-proposal-decorators"
@withLog
@withName
@withLog
class jpsite extends Component {
  
  render () {
    console.log(this.props)
    return (
      <div>
        {this.props.state} - {this.props.name}
      </div>
    )
  }
}

// export default withName(withLog(App)) // 链式调用
export default jpsite 