import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout, Card, Form, Input, Button, Select } from 'antd'
import Footer from './Footer'
const { Sider, Content } = Layout
const { Option } = Select

class Contacts extends Component {
  handleClick = e => {
    console.log('click ', e)
  }

  recentVisits = () => {
    this.props.history.push('/profile')
  }

  createContact = () => {
    this.props.history.push('/create-contact')
  }
  contacts = () => {
    this.props.history.push('/contacts')
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
              defaultSelectedKeys={['3']}
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
              <h1 style={{ textAlign: 'center' }}>Create a New contact!</h1>
              <p>The contacts you add will be visible to others when you have an emergency.</p>
              {/* CONTAINER CARDS */}
              <div
                style={{
                  margin: '3% 0',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexFlow: 'wrap'
                }}>
                {/* CONTAINER CARDS */}
                {/* ----------------------------- */}
                {/* CARD UNICA */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexFlow: 'wrap',
                    border: '1px solid #e8e8e8',
                    padding: ' 20px 20px 20px 20px',
                    width: '90%',
                    margin: '1% 0 1% 0'
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
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '11.3px' }} n>
                        Delete
                      </span>
                    </div>
                  </div>
                  <div style={{ margin: '5% 0' }}>
                    <img src="/images/contact.svg" width="70px" alt="" />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexFlow: 'wrap',
                    border: '1px solid #e8e8e8',
                    padding: ' 20px 20px 20px 20px',
                    width: '90%',
                    margin: '1% 0 1% 0'
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
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '11.3px' }} n>
                        Delete
                      </span>
                    </div>
                  </div>
                  <div style={{ margin: '5% 0' }}>
                    <img src="/images/contact.svg" width="70px" alt="" />
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexFlow: 'wrap',
                    border: '1px solid #e8e8e8',
                    padding: ' 20px 20px 20px 20px',
                    width: '90%',
                    margin: '1% 0 1% 0'
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
                    <br />
                    <br />
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '11.3px' }} n>
                        Delete
                      </span>
                    </div>
                  </div>
                  <div style={{ margin: '5% 0' }}>
                    <img src="/images/contact.svg" width="70px" alt="" />
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

Contacts.contextType = MyContext

export default Contacts
