import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout, Button } from 'antd'
import Footer from '../home/Footer'
const { Sider, Content } = Layout

class RegisterConsult extends Component {
  handleClick = e => {
    console.log('click ', e)
  }

  registerConsult = () => {
    this.props.history.push('register-consult')
  }

  myPrescriptions = () => {
    this.props.history.push('/doctor-prescriptions')
  }
  doctorProfile = () => {
    this.props.history.push('/doctor-profile/:id')
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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}>
              <Menu.Item onClick={this.registerConsult} key="1">
                <Icon type="solution" />
                Register medical consultation
              </Menu.Item>
              <Menu.Item onClick={this.myPrescriptions} key="3">
                <Icon type="file-search" />
                My prescriptions
              </Menu.Item>
              <Menu.Item onClick={this.doctorProfile} key="4">
                <Icon type="user" />
                Profile
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
              <img src="images/eye.svg" width="120vw" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>Welcome Andrés Hernández</h1>
              <p>Here you can see the users registered in the app.</p>
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
                      <b>Name: </b>
                    </span>
                    <span>Enrique </span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b> Lastname: </b>
                    </span>
                    <span>Ramirez</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b> Email:</b>
                    </span>
                    <span>zariel145@hotmail.com</span>
                    <span style={{ fontSize: '11.3px' }}>
                      <b>Age: </b>
                    </span>
                    <span>22</span>
                  </div>
                  <div style={{ margin: '5% 0' }}>
                    <img src="/images/contact.svg" width="70px" alt="" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      style={{
                        backgroundColor: '#ed5151',
                        margin: ' 0 0 10% 0',
                        border: 'none',
                        color: 'white',
                        fontSize: '11.3px'
                      }}>
                      Create presciption
                    </Button>
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

RegisterConsult.contextType = MyContext

export default RegisterConsult
