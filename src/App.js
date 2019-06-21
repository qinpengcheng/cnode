import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import router from './router'
class App extends Component {
  render() {
    return (
      <div className='App'>
        55555555666444
        <Router>
          <div>
            <Switch>
              {
                router.map((route, key) => {
                  if (route.exact) {
                    return <Route
                      key={key}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    >
                    </Route>
                  } else {
                    return <Route
                      key={key}
                      path={route.path}
                      component={route.component}
                    >
                    </Route>
                  }
                })

              }
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
