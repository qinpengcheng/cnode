import React , {Component} from 'react'
class Register extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name :'register'
    }
  }
  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
export default Register