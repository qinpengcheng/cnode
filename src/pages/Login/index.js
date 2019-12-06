import React, { Component } from 'react';
class Login extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      name:'Login'
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>{this.state.name}</div>
    )
  }

}

export default Login;