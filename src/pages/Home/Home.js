import React, { Component } from 'react';
import './home.scss';
import apiFunction from "../../api/apiFunction";
import Page from '../../component/page'
class Home extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            name:'This is Home',
            tabs:[
              {name:'全部',key:'all'},
              {name:'精华',key:'good'},
              {name:'分享',key:"share"},
              {name:'回答',key:'ask'},
              {name:'招聘',key:'job'},
              {name:'客户端测试',key:'dev'}
              ],
            tabIndex:0,
            listData:[],
            type:'all',
            pageNum:1
        }
    }

  componentDidMount(){
    this.getData();

  }
  dateFormat(s){
    let t = new Date(s).getTime()
    let d = new Date().getTime()
    let time = (d - t)/1000
    let value = '刚刚'
    if(time/60/60/24/30 >=12){
      value = Math.round(time/60/60/24/30/12)+'年前'
    }else if(time/60/60/24 >=30){
      value = Math.round(time/60/60/24/30)+'月前'
    }else if(Math.round(time/60/60)>=24){
      value = Math.round(time/60/60/24)+'天前'
    }else if(time/60>=60){
      value =Math.round(time/60/60)+'小时前'
    }else if(time/60>=1){
      value = Math.round(time/60)+'分钟前'
    }else if(time>20){
      value =Math.floor(time)+'秒前'
    }
    return value
  }
    tabActive(index,key){
      this.setState({
        tabIndex:index,
        pageNum:1,
        type:key
      },
        ()=> this.getData());
    }
    async getData(){
      const response = await apiFunction.topics({tab:this.state.type,page:this.state.pageNum})
      this.setState({
        listData:response.data.data
      })
    }
    renderTabs(){
      let {tabs} = this.state
      let {tabIndex} = this.state
      return (
           tabs.map((item,index)=>{
              return <li key={index} className={tabIndex===index?'active':''} onClick={this.tabActive.bind(this,index,item.key)}>{item.name}</li>
            })

      )
    }
  lookDetail(row){
    console.log(row);
    // this.props.history.push('/detail/' + row.id,{data:row})
    this.props.history.push(`/detail`,row)
  }

    renderContent(){
      let {listData} = this.state
     return listData.map((item,index)=>{
        return (
          <li key={index} onClick={this.lookDetail.bind(this,item)}>
            <div className='list-left'>
                <div className='list-left-info'>
                  <img src={item.author.avatar_url}  title={item.author.loginname}/>
                  <span className='number'>
                    <span title='回复数'>{item.reply_count}</span><span title='点击数'>/{item.visit_count}</span>
                  </span>
                  <span className={['tab',item.top || item.good?'active':''].join(' ')} >{item.top?'置顶':item.good?'精华':item.tab ==='share'?'分享':'问答'}</span>
                  <span className='to'>{item.title}</span>
                </div>
            </div>
            <div className='list-right'>
              <span>{this.dateFormat(item.last_reply_at)}</span>
            </div>
          </li>
        )
      })
    }
  pageChange(val){
    this.setState({
        pageNum:val
      },
      ()=>this.getData())
  }
    render() {
        return (
            <div className="home">
              <div className='content-left'>
                <div className='nav-header'>
                  <ul>
                    {this.renderTabs()}
                  </ul>
                </div>
                <div className='nav-content'>
                    <ul>
                      {this.renderContent()}
                    </ul>
                  <Page pageNum={this.state.pageNum} onPageChange={this.pageChange.bind(this)}></Page>
                </div>
              </div>
              <div className='content-right'>

              </div>

            </div>
        );
    }
}

export default Home;
