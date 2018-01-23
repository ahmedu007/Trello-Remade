import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Boards from './Boards';
import Login from './components/Login'
import ButtonAppBar from './components/AppBar'

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ButtonAppBar />
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/boards' component={Boards} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
