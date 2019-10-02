import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout, Card, Form, Input, Button, Select } from 'antd'
import Footer from './Footer'
const { Sider, Content } = Layout
const { Option } = Select

class CreateContact extends Component {
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
              defaultSelectedKeys={['2']}
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
                  margin: '7% 0',
                  display: 'flex',
                  justifyContent: 'space-around',
                  flexFlow: 'wrap'
                }}>
                {/* CONTAINER CARDS */}
                {/* ----------------------------- */}
                {/* FORM CONTACT */}
                <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
                  <Form onSubmit={this.onSubmit}>
                    <label>Name</label>
                    <Input
                      name="name"
                      onChange={this.handleInputs}
                      type="text"
                      placeholder="Enrique"
                    />
                    <label>Lastname</label>
                    <Input
                      name="lastName"
                      onChange={this.handleInputs}
                      type="text"
                      placeholder="García"
                    />
                    <label>Age</label>
                    <Input name="age" onChange={this.handleInputs} type="number" placeholder="20" />
                    <label>Family Relationship</label>
                    <Select
                      name="familyRelationship"
                      onChange={this.handleInputs}
                      placeholder="Cousin">
                      <Option value="Mother">Mother</Option>
                      <Option value="Father">Father</Option>
                      <Option value="Son">Son</Option>
                      <Option value="Uncle">Uncle</Option>
                      <Option value="Aunt">Aunt</Option>
                      <Option value="Cousin">Cousin</Option>
                      <Option value="Friend">Friend</Option>
                    </Select>
                    <label>Phone Number</label>
                    <Input
                      name="phoneNumber"
                      onChange={this.handleInputs}
                      type="tel"
                      placeholder="55 - 45 74 92 18"
                    />
                    <br />
                    <br />
                    <Button htmlType="submit">Create</Button>
                  </Form>
                </Card>
              </div>
            </Content>
          </div>
        </Layout>

        <Footer />
      </div>
    )
  }
}

CreateContact.contextType = MyContext

export default CreateContact
