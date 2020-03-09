// Redux = flux + Reduce
import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css';
import store from './store/index'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'


// store 的创建

class ToduList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange) // 只要store里面的数据发生变化，就会执行里面的方法
  }

  handleInputChange = (e) => {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
    // this.setState(store.getState()) 
  }

  handleStoreChange = () => {
    console.log('store changed')
    this.setState(store.getState())
  }

  handleBtnClick = () => {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  handleItemDelete (index) {
    console.log(index)
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }

  render() {
    console.log(this.state.list)
    return (
      <div style={{ padding: 10 }}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{ width: 300, marginRight: 10 }} 
            onChange={this.handleInputChange}
            />
          <Button onClick={this.handleBtnClick} type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: 10, width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ToduList