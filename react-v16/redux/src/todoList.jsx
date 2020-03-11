// Redux = flux + Reduce
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index'
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
// store 的创建

class ToduList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange) // 只要store里面的数据发生变化，就会执行里面的方法
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
    console.log(action)
    // const action = getTodoList()
    // store.dispatch(action) // action为函数，且store集成了thunk，dispatch直接执行action方法
  }

  handleInputChange = (e) => {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
    // this.setState(store.getState()) 
  }

  handleStoreChange = () => {
    console.log('store changed')
    this.setState(store.getState())
  }

  handleBtnClick = () => {
    // const action = {
    //   type: ADD_TODO_ITEM
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    console.log(index)
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
}

export default ToduList