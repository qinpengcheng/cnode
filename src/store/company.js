import {ADD_AGE, SET_NAME} from "./action";

function company(state={name:'李四',age:22}, action) {
  switch (action.type) {
    case ADD_AGE:
      return{
        ...state,
        age:state.age+action.n
      }
    case SET_NAME:
      return{
        ...state,
        name:action.name
      }
    default:
      return state
  }
}
export default company