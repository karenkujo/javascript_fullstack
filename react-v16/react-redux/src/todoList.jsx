import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
  handleClick () {

  }

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} type="text" />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}

// 把store.dispatch方法映射到props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue (e) {
      const action = {
        type: 'changeInputValue',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

// connect 是连接  
// TodoList 和 store 做连接
// mapStateToProps 的参数就是 store 里面的数据  该方法会帮助我们把store映射到当前的props

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)