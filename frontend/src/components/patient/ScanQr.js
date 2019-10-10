import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from '../home/Footer'
import SiderPatient from './SiderPatient'
import QrReader from 'react-qr-reader'
const { Content } = Layout

class ScanQr extends Component {
  state = {
    user: {}
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
      this.props.history.push(`/qrCodeEmergency/${this.state.user._id}`)
    }
    // console.log('Soy el user chido', this.state.user._id)
  }

  handleError = err => {
    console.error(err)
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
              <img alt="QRcode" src="/images/eye.svg" width="120vw" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>
                {user.user.name} {user.user.lastName}, test your QR Code!
              </h1>
              {/* CONTAINER CARDS */}
              <div style={{ margin: '5% 0' }}>
                <QrReader
                  delay={300}
                  onError={this.handleError}
                  onScan={this.handleScan}
                  style={{ width: '40vw', margin: '0 0 0 25%' }}
                />
                <p>{this.state.result}</p>
              </div>
            </Content>
          </div>
        </Layout>
        <Footer />
      </div>
    )
  }
}

ScanQr.contextType = MyContext

export default ScanQr
