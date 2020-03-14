import { combineReducers } from 'redux' 
import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
  header: headerReducer
})