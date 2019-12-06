import React, { Component } from 'react';
import './index.scss'
import logImg from '../../assets/img/cnodejs_light.svg'
import {Link} from 'react-router-dom'
class Header extends Component{
    constructor(props,context){
      super(props,context);
      this.state={
        linkArr:[
          {
            to:'/',
            name:'首页'
          },
          {
            to:'/introduction',
            name:'新手入门'
          },
          {
            to:'/api',
            name:'API'
          },
          {
            to:'/about',
            name:'关于'
          },
          {
            to:'/register',
            name:'注册'
          },
          {
            to:'/login',
            name:'登陆'
          }
        ]
      }
      this.to = this.to.bind(this)
    }

    render() {
      return(
        <div className='header'>
            <div className='nav'>
              <div className='nav-left'>
                <div className='log'>
                  <a href="/">
                    <img src={logImg} alt=""/>
                  </a>
                </div>
                <div className='search'>
                  <input type="text"/>
                </div>
              </div>
              <div className='nav-right'>
                    {
                      this.state.linkArr.map(item=>{
                        return <Link
                          to={item.to}
                          key={item.name}>
                          {item.name}
                        </Link>
                      })
                    }
              </div>
            </div>
        </div>
      )
    }
  to(path,e){
    console.log(path);
    console.log(this.props);
  }
}
export default Header