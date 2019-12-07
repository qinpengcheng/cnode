import {createStore,combineReducers} from 'redux'
import user from './user'
import company from './company'
let arr = combineReducers({
  user:user,
  company:company
})
export default createStore(arr)