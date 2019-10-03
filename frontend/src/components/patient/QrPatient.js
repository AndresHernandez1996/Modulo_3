import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout, Card } from 'antd'
import Footer from '../home/Footer'
const { Sider, Content } = Layout

class QrPatient extends Component {
  handleClick = e => {
    console.log('click ', e)
  }

  recentVisits = () => {
    this.props.history.push('/patient-profile')
  }

  createContact = () => {
    this.props.history.push('/create-contact')
  }
  contacts = () => {
    this.props.history.push('/contacts')
  }
  qrCode = () => {
    this.props.history.push('/qr-emergency')
  }

  render() {
    return (
      <div>
        <nav
          style={{ padding: '.6% 5% .6% 5%', backgroundColor: '#ed5151' }}
          className="navbar navbar-expand-lg navbar-light ">
          <a style={{ color: 'white' }} className="navbar-brand" href="#">
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
                <a style={{ color: 'white' }} className="nav-link" href="#">
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
          <Sider style={{ backgroundColor: 'white' }}>
            <Menu
              style={{ border: '', width: '205px' }}
              defaultSelectedKeys={['5']}
              defaultOpenKeys={['sub1']}>
              <Menu.Item onClick={this.recentVisits} key="1">
                <Icon type="solution" />
                Recent medical visits
              </Menu.Item>
              <Menu.Item onClick={this.createContact} key="2">
                <Icon type="user-add" />
                Create contact
              </Menu.Item>
              <Menu.Item onClick={this.contacts} key="3">
                <Icon type="team" />
                Contacts
              </Menu.Item>
              <Menu.Item onClick={this.qrCode} key="4">
                <Icon type="qrcode" />
                QR Code
              </Menu.Item>
            </Menu>
          </Sider>
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Content style={{ backgroundColor: 'white', padding: '5% 0 0 0' }}>
              <img src="images/alert.svg" width="120vw" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>Attention! Andrés Hernández</h1>
              <p>
                This code can be shared with your contacts, this shows your emergency contacts and
                nearby hospitals
              </p>
              {/* CONTAINER CARDS */}

              <img
                style={{ margin: '10% 0' }}
                src="https://res.cloudinary.com/ironhacker/image/upload/v1570065915/Captura_de_Pantalla_2019-10-02_a_la_s_8.24.37_p._m._wyi0dk.png"
                width="180px"></img>
              {/* CARD UNICA */}
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
