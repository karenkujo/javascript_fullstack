import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
  count: 0
}

const userInitialState = {
  username: 'wn',
  age: 18
}


const ADD = 'ADD'
function conutReducer(state = initialState, action) {
  console.log(state.count)
  switch (action.type) {
    case ADD:
      return { count: state.count + ( action.num || 1 )}
    default:
      return state
  }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
function userReducer (state = userInitialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.username}
    default:
      return state
  }
}

const allReducer = combineReducers({
  counter: conutReducer,
  user: userReducer
})
const store = createStore(
  allReducer, 
  {
  counter: initialState,
  user: userInitialState
  },
  applyMiddleware(ReduxThunk)
)

// actionCreator
function add(num) {
  return {
    type: ADD, num
  }
}

function addAsync(num) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD,
        num
      })
    }, 1000)
  }
}

store.dispatch(add(3))

store.subscribe(() => {
  console.log('subscribe', store.getState())
})

store.dispatch(addAsync(5))
store.dispatch({ type: UPDATE_USERNAME, username: 'zm' })

export default store