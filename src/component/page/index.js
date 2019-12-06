import React,{Component} from 'react'
import './index.scss'
class Page extends Component{
  constructor(props,context){
    super(props,context)
    this.state={
        pageIndexArr:[1,2,3,4,5]
    }
    this.handleClick.bind(this)
  }
  componentDidMount() {
    console.log(this.props);
  }

  handleClick(e,index){
    if(index+1 === this.props.pageNum){return false}
    this.props.onPageChange(index+1)
  }
  render() {
    let {pageNum} =this.props
    return(
      <div className='page'>
        <div className='content'>
            {
              this.state.pageIndexArr.map((item,index)=>{
                return(
                  <span key={item} className={pageNum ===index+1?'active':''} onClick={(e)=>this.handleClick(e,index)}>{item}</span>
                )
              })
            }
        </div>
      </div>
    )
  }

}
export default Page