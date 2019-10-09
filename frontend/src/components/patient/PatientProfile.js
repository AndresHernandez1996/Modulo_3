import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from '../home/Footer'
import SiderPatient from './SiderPatient'
const { Content } = Layout

class PatientProfile extends Component {
  state = {
    user: {},
    visible: false
  }
  handleClick = e => {
    console.log('click ', e)
  }

  componentDidMount() {
    if (localStorage.user) {
      let user = JSON.parse(localStorage.user)
      this.setState({ user })
    }
    if (!localStorage.user) return this.props.history.push('/login')
  }

  // componentDidMount() {
  //   if (!this.context.state.loggedUser) return this.props.history.push('/login')
  //   const userData = this.context.state.loggedUser
  //   this.setState(userData)
  //   localStorage.setItem('user', JSON.stringify(userData))
  // }

  render() {
    let { user } = this.state
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
        {/* EMPIEZA SIDE NAV */}

        {/* TERMINA SIDE NAV */}

        <Layout>
          <SiderPatient history={this.props.history} />
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Content style={{ backgroundColor: 'white', padding: '5% 0 0 0' }}>
              <img alt="foto" src={user.imageProfile} width="120vw" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>
                Welcome {user.name} {user.lastName}
              </h1>
              <p>Here you can see your recent medical appointments.</p>
              {/* CONTAINER CARDS */}
              <div
                style={{
                  margin: '7% 0',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexFlow: 'wrap'
                }}>
                {/* CONTAINER CARDS */}
                {/* ----------------------------- */}
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
                      <b>Doctor: </b>
                    </span>
                    <span>Enrique Ramirez</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b>Hospital: </b>
                    </span>
                    <span>Angeles lomas</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b> Date:</b>
                    </span>
                    <span>30 / 09 / 2019</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b>Prescription: </b>
                    </span>
                    <span>Manage your information and privacy and security options t</span>
                  </div>
                  <div style={{ margin: '5% 0' }}>
                    <img alt="sour" src="/images/prescription.svg" width="70px" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '11.3px' }} n>
                      Ver detalle
                    </span>
                  </div>
                </div>
                {/* CARD UNICA */}
              </div>
            </Content>
          </div>
        </Layout>

        <Footer />
      </div>
    )
  }
}

PatientProfile.contextType = MyContext

export default PatientProfile
