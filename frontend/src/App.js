import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../src/components/common/Home'
import Login from '../src/components/auth/Login'
import Register from '../src/components/auth/Register'
import About from '../src/components/common/About'
import UserDashBoard from '../src/components/user/UserDashBoard'
import CreateVideo from '../src/components/user/CreateVideo'
import Navbar from '../src/components/common/Navbar'
import AllUsers from '../src/components/user/AllUsers'
import GetSingleUser from '../src/components/user/GetSingleUser'

function App () {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/all-users" component={AllUsers} />
      <Route path="/createvideo" component={CreateVideo} />
      <Route path="/dashboard" component={UserDashBoard} />
      <Route path="/:username" component={GetSingleUser} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register} />
    </Switch>
    </BrowserRouter>
  )
}

export default App
