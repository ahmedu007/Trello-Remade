import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './components/Login'
import ButtonAppBar from './components/AppBar'

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <ButtonAppBar />
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
