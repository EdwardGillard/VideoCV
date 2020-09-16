import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/components/common/Home'
import Login from '../src/components/auth/Login'

function App () {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/login" component={Login}/>
    </Switch>
    </BrowserRouter>
  )
}

export default App
