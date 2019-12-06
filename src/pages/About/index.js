import React , {Component} from 'react'
class About extends Component{
  constructor(props,context){
    super(props,context)
    this.state = {
      name:'about'
    }
  }
  render() {
    return(
      <div>
        {this.state.name}
      </div>
    )
  }
}
export default About