import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/404/NotFound.js'
import Login from './components/home/Login'
import PatientProfile from './components/patient/PatientProfile'
import CreateContact from './components/patient/CreateContact'
import Contacts from './components/patient/Contacts'
import DoctorProfile from './components/Doctor/DoctorProfile'
import DoctorSignup from './components/Doctor/DoctorSignup'
import PatientSignup from './components/patient/PatientSignup'
import RegisterConsult from './components/Doctor/RegisterConsult'
import QrPatient from './components/patient/QrPatient'
import CreatePrescription from './components/Doctor/CreatePrescription'
import PatientEmergency from './components/patient/PatientEmergency'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/doctor-signup" component={DoctorSignup} />
      <Route exact path="/patient-signup" component={PatientSignup} />
      <Route exact path="/patient-profile/:id" component={PatientProfile} />
      <Route exact path="/create-contact/:id" component={CreateContact} />
      <Route exact path="/qr-emergency/:id" component={QrPatient} />
      <Route exact path="/contacts/:id" component={Contacts} />
      <Route exact path="/doctor-profile/:id" component={DoctorProfile} />
      <Route exact path="/register-consult/:id" component={RegisterConsult} />
      <Route exact path="/my-prescriptions/:id" component={CreatePrescription} />
      <Route exact path="/qrCodeEmergency/:id" component={PatientEmergency} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
