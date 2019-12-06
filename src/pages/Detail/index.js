import React, { Component } from 'react';
import './index.scss'


class Detail extends Component{

  constructor(props,context){
    super(props,context)
    this.state={
      name:'this is Topic',
      content:this.props.location.state.content
    }

  }
  componentDidMount() {
  }

  getDetail(){
    fetch('/api/customQueryDefinition/pc/v1/queryDefinition',function (res) {
      console.log(res);
    })
  }
  render() {
    return (
      <div className="topic">
        <header className="topic-header">
          <p>{this.state.name}</p>
        </header>
        <div className="topic-content" dangerouslySetInnerHTML={{__html:this.state.content}}>
        </div>
      </div>
    );
  }

}
export default Detail