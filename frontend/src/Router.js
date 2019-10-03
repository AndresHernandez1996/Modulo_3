import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/404/NotFound.js'
import Login from './components/home/Login'
import PatientProfile from './components/home/PatientProfile'
import CreateContact from './components/home/CreateContact'
import Contacts from './components/home/Contacts'
import DoctorProfile from './components/Doctor/DoctorProfile'
import DoctorSignup from './components/Doctor/DoctorSignup'
import PatientSignup from './components/home/PatientSignup'
import RegisterConsult from './components/Doctor/RegisterConsult'
import QrPatient from './components/patient/QrPatient'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/doctor-signup" component={DoctorSignup} />
      <Route exact path="/patient-signup" component={PatientSignup} />
      <Route exact path="/patient-profile" component={PatientProfile} />
      <Route exact path="/create-contact" component={CreateContact} />
      <Route exact path="/qr-emergency" component={QrPatient} />
      <Route exact path="/contacts" component={Contacts} />
      <Route exact path="/doctor-profile" component={DoctorProfile} />
      <Route exact path="/register-consult" component={RegisterConsult} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
