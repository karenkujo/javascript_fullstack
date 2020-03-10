import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhanders = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhanders(
  applyMiddleware(thunk)
)

const store = createStore(
  reducer,
  enhancer
) // store已经能知道存放的数据了

export default store