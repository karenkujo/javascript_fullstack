// Redux = flux + Reduce
import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css';
import store from './store/index'


// store 的创建

class ToduList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }
  render() {
    return (
      <div style={{ padding: 10 }}>
        <div>
          <Input value={this.state.inputValue} placeholder="todo info" style={{ width: 300, marginRight: 10 }} />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: 10, width: 300}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default ToduList