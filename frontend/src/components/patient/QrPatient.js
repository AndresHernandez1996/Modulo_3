import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from '../home/Footer'
import SiderPatient from './SiderPatient'
import QRCode from 'qrcode.react'
const { Content } = Layout

class QrPatient extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    if (localStorage.user) {
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({ user })
    }
    if (!localStorage.user) return this.props.history.push('/login')
  }

  render() {
    const user = this.state
    // console.log('tarigo esta info', user.user._id)
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
              <img alt="QRcode" src="/images/alert.svg" width="120vw" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>
                Attention! {user.user.name} {user.user.lastName}
              </h1>
              <p>
                This code can be shared with your contacts, this shows your emergency contacts and
                nearby hospitals
              </p>
              {/* CONTAINER CARDS */}
              <div style={{ margin: '10% 0' }}>
                <QRCode
                  size="70"
                  value={`https://jolteon.now.sh/qrCodeEmergency/${user.user._id}`}
                />
              </div>
            </Content>
          </div>
        </Layout>
        <Footer />
      </div>
    )
  }
}

QrPatient.contextType = MyContext

export default QrPatient
