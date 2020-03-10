import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
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