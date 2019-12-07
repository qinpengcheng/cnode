import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,NavLink  } from 'react-router-dom'
import Header from './component/header'
import Footer from './component/footer'
import router from './router'
import './App.css'
class App extends Component {
  constructor(props,context){
    super(props,context)
  }


  render() {
    return (
      <div className='App'>
          <Router>
            <div className='main'>
              <Header></Header>
                {
                  router.map((item,index)=>{
                    if(item.exact){
                      return <Route
                      path={item.path}
                      component={item.component}
                      exact={item.exact}
                      key={index}
                      >
                      </Route>
                    }else{
                      return <Route
                        path={item.path}
                        component={item.component}
                        key={index}
                      >
                      </Route>
                    }
                  })
                }
              <Footer></Footer>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
