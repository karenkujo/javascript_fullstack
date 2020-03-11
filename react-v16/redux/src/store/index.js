import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import TodoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhanders = 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhanders(
  // applyMiddleware(thunk)
  applyMiddleware(sagaMiddleware)
)

const store = createStore(
  reducer,
  enhancer
) // store已经能知道存放的数据了

sagaMiddleware.run(TodoSagas)

export default store