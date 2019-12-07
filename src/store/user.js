import {SET_NAME} from './action'

function user(state={name:"张三"},action) {
  switch (action.type) {
    case SET_NAME:
      return{
        ...state,
        name:action.name
      }
    default:
      return state
  }
}

export default user