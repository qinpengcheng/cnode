import React , {Component} from 'react'
class Introduction extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name:'Introduction'
    }
  }
  componentDidMount(){

  }
  render(){
    return (
      <div>{this.state.name}</div>
    )
  }
}
export default Introduction