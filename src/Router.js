import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App'
import Login from './components/Login'

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
