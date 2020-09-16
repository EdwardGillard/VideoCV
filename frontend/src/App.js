import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/components/common/Home'
import Login from '../src/components/auth/Login'
import Register from '../src/components/auth/Register'
import About from '../src/components/common/About'
import UserDashBoard from '../src/components/user/UserDashBoard'

function App () {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={UserDashBoard} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
