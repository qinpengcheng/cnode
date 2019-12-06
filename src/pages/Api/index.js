import React , {Component} from 'react'
class Api extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
      name:'Api'
    }
  }
  componentDidMount(){

  }
  render(){
    return(
      <div>
        {this.state.name}
      </div>
    )
  }

}
export default Api