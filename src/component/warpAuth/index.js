 import React,{Component} from 'react'
class WrapAuth  extends Component{
   constructor(props,context){
     super(props,context)
   }

   componentDidMount() {
     console.log(this.props);
   }

  render() {
     if (this.props.auth) {
         return <button {...this.props}/>;
     } else {
     return <button {...this.props} onClick={()=>{alert('暂无权限')}}/>;
     }
   }
 }
 export default WrapAuth