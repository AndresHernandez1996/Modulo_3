import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/404/NotFound.js'
import Signup from './components/home/Signup'
import Login from './components/home/Login'
import PatientProfile from './components/home/PatientProfile'
import CreateContact from './components/home/CreateContact'
import Contacts from './components/home/Contacts'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={PatientProfile} />
      <Route exact path="/create-contact" component={CreateContact} />
      <Route exact path="/create-contact" component={CreateContact} />
      <Route exact path="/contacts" component={Contacts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
