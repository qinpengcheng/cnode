import React , {Component} from 'react'
import {connect} from 'react-redux'
import {SET_NAME,ADD_AGE} from "../../store/action";

class Api extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      name:'Api'
    }
  }
  componentDidMount(){
    console.log(this.props);
  }
  fn(){
    this.props.setName('王贝贝'+Math.floor(Math.random()*10+1))
  }
  fn1(){
    this.props.add_age(Math.floor(Math.random()*3+1))
  }
  render(){
    return(
      <div>
       姓名: {this.props.name}
        <br/>
        年龄：{this.props.age}
        <br/>
        <button onClick={this.fn.bind(this)}>修改名称</button>
        <br/>
        <button onClick={this.fn1.bind(this)}>修改年龄</button>
      </div>
    )
  }

}
export default connect(function (state, props) {
  return state.company
},{
  setName(name){
    return{
      type:SET_NAME,
      name
    }
  },
  add_age(n){
    return{
      type:ADD_AGE,
      n
    }
  }
})(Api)