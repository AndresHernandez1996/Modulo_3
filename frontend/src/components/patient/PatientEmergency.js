import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import Footer from '../home/Footer'
import QRCode from 'qrcode.react'
const { Content } = Layout

class PatientEmergency extends Component {
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
    console.log('tarigo esta info', user)
    return (
      <div>
        <nav
          style={{ padding: '.6% 5% .6% 5%', backgroundColor: '#ed5151' }}
          className="navbar navbar-expand-lg navbar-light ">
          <a style={{ color: 'white' }} className="navbar-brand" href="/">
            JOLTEON
          </a>
          <NavLink exact to="/">
            <button
              color="#ed5151"
              style={{ border: 'none', borderRadius: '50px', color: '#ed5151' }}
              className="btn  btn-light my-2 my-sm-0">
              Meet Jolteon!
            </button>
          </NavLink>
        </nav>
        {/* EMPIEZA SIDE NAV */}

        {/* TERMINA SIDE NAV */}

        <Layout>
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
              <h1 style={{ textAlign: 'center' }}>Emergency!</h1>
              <section style={{width:'85%', textAlign:'center', margin:'7%'}}>
                <p>
                  If you are seeing this qr code, it is most likely that the person{' '}
                  <b>carrying it is at risk</b>, please call some of their contacts or take it to
                  the nearest hospital
                </p>
              </section>
              {/* CONTAINER CARDS */}
              <div style={{ margin: '10% 0' }}>
                <QRCode value="http://localhost:3000/auth/qrCodeEmergency" />
              </div>
              {/* <img
                style={{ margin: '10% 0' }}
                src="https://res.cloudinary.com/ironhacker/image/upload/v1570065915/Captura_de_Pantalla_2019-10-02_a_la_s_8.24.37_p._m._wyi0dk.png"
                width="180px"></img> */}
              {/* CARD UNICA */}
            </Content>
          </div>
        </Layout>
        <Footer />
      </div>
    )
  }
}

PatientEmergency.contextType = MyContext

export default PatientEmergency
