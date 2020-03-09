import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer) // store已经能知道存放的数据了

export default store