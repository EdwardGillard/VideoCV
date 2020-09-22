import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import About from './components/common/About'
import Navbar from './components/common/Navbar'
import videoShow from './components/common/videoShow'

import Login from './components/auth/Login'
import Register from './components/auth/Register'

import Projects from './components/show/projects'
import Personal from './components/show/personal'

import UserDashBoard from './components/user/UserDashBoard'
import CreateVideo from './components/user/CreateVideo'
import AllUsers from './components/user/AllUsers'
import GetSingleUser from './components/user/GetSingleUser'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {/* Auth related */}
        <Route path="/dashboard" component={UserDashBoard} />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register} />

        <Route exact path='/' component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/allusers" component={AllUsers} />
        {/* Video related */}
        <Route path="/createvideo" component={CreateVideo} />
        <Route path="/videoshow" component={videoShow}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/personal" component={Personal}/>
        
        <Route path="/:username" component={GetSingleUser} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
