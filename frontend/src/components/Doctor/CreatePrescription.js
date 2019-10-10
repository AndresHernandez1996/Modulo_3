import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from '../home/Footer'
import axios from 'axios'
import SiderDoctor from './SiderDoctor'
const { Content } = Layout

class CreatePrescription extends Component {
  state = {
    user: {},
    prescription: {}
  }

  onSubmit = e => {
    e.preventDefault()
    const { prescription } = this.state
    axios
      .post(
        `https://aqueous-scrubland-35857.herokuapp.com/doctor/create-prescription`,
        prescription
      )
      .then(({ data }) => {
        // console.log('Esta es la prescription', data)
        this.setState({})
        this.props.history.push(`/my-prescriptions/${this.state.user._id}`)
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    if (localStorage.user) {
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({ user })
    }
    if (!localStorage.user) return this.props.history.push('/login')
  }

  handleInputs = e => {
    const { prescription } = this.state
    const key = e.target.name
    prescription[key] = e.target.value
    this.setState({ prescription })
    // console.log(this.state.prescription)
  }

  render() {
    const user = this.state.user
    return (
      <div>
        <nav
          style={{ padding: '.6% 5% .6% 5%', backgroundColor: '#ed5151' }}
          className="navbar navbar-expand-lg navbar-light ">
          <a style={{ color: 'white' }} className="navbar-brand" href="/">
            JOLTEON
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a style={{ color: 'white' }} className="nav-link" href="/">
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <NavLink exact to="/">
              <button
                onClick={this.context.logOut}
                color="#ed5151"
                style={{ border: 'none', borderRadius: '50px', color: '#ed5151' }}
                className="btn  btn-light my-2 my-sm-0">
                Logout
              </button>
            </NavLink>
          </div>
        </nav>
        <Layout>
          <SiderDoctor history={this.props.history} />
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Content style={{ backgroundColor: 'white', padding: '5% 0 0 0' }}>
              <img alt="user" src={user.imageProfile} width="120px" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>
                Hello! {user.name} {user.lastName}
              </h1>
              <p>Is any of your personal data wrong?.</p>
              <div
                style={{
                  margin: '7% 0',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexFlow: 'wrap'
                }}>
                {/* FORM CONTACT */}
                {/* CARD UNICA */}
                <div
                  style={{
                    border: '1px solid #e8e8e8',
                    padding: ' 20px 20px 20px 20px',
                    width: '30%',
                    margin: '3% 0 3% 0'
                  }}>
                  <div
                    style={{
                      display: 'flex',
                      flexFlow: 'column',
                      fontSize: '10px',
                      textAlign: 'start'
                    }}>
                    <span style={{ fontSize: '11.3px' }}>
                      <b>Patient: </b>
                    </span>
                    <span>Enrique Ramirez</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b>Symptoms: </b>
                    </span>
                    <span>Headeck</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b> Date:</b>
                    </span>
                    <span>30 / 09 / 2019</span>
                  </div>
                  <div style={{ margin: '5% 0' }}>
                    <img src="/images/prescription.svg" width="70px" alt="" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '11.3px' }} n>
                      Ver detalle
                    </span>
                  </div>
                </div>
                {/* CARD UNICA */}
              </div>
              {/* SE MUESTRA SIN MODAL */}

              {/* CARD UNICA */}
            </Content>
          </div>
        </Layout>
        {/* <App /> */}
        <Footer />
      </div>
    )
  }
}

CreatePrescription.contextType = MyContext

export default CreatePrescription
