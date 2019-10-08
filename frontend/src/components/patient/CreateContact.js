import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout, Card, Form, Input, Button, Select } from 'antd'
import Footer from '../home/Footer'
import SiderPatient from './SiderPatient'
import CONTACT_SERVICE from '../../services/contacts'
const { Content } = Layout
const { Option } = Select

class CreateContact extends Component {
  state = {
    user: {},
    contact: {
      name: '',
      lastName: '',
      age: '',
      familyRelationship: '',
      phoneNumber: ''
    }
  }
  handleClick = e => {
    console.log('click ', e)
  }

  onSubmit = e => {
    e.preventDefault()
    let contact = this.state
    CONTACT_SERVICE.createContact(contact)
      // .post(`http://localhost:3000/contact/create-contact`, contact)
      .then(({ data }) => {
        console.log('Esta es la data del contact', data)
        this.props.history.push(`/contacts/${this.state.user._id}`)
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
    const { contact } = this.state
    const key = e.target.name
    contact[key] = e.target.value
    this.setState({ contact })
    console.log(this.state.contact)
  }

  handleSelect = value => {
    const { contact } = this.state
    contact.familyRelationship = value
    this.setState({ contact })
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
              <img alt="profile" src={user.imageProfile} width="120vw" />
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
                      required
                    />
                    <label>Lastname</label>
                    <Input
                      name="lastName"
                      onChange={this.handleInputs}
                      type="text"
                      placeholder="García"
                      required
                    />
                    <label>Age</label>
                    <Input
                      name="age"
                      onChange={this.handleInputs}
                      type="number"
                      placeholder="20"
                      required
                    />
                    <label>Family Relationship</label>
                    <Select
                      name="familyRelationship"
                      onChange={this.handleSelect}
                      placeholder="Cousin"
                      required>
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
                      required
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
