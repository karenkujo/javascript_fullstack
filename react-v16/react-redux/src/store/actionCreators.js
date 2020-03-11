import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  }
} 
export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}
export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}
export const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data
  }
}

// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1').then(res => {
//       const data = res.data
//       console.log(data)
//       const action = initListAction(Object.keys(data.hotComments[0]))
//       // store.dispatch(action)
//       // console.log(action)
//       dispatch(action)
//     })
//   }
// }

export const getInitList = () => ({
  type: GET_INIT_LIST
})