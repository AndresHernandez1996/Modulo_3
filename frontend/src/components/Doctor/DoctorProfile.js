import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout, Card, Form, Input, Button, Modal } from 'antd'
import Footer from '../home/Footer'
import axios from 'axios'
import SiderDoctor from './SiderDoctor'
const { Content } = Layout

class DoctorProfile extends Component {
  state = {
    user: {
      name: '',
      lastName: '',
      university: '',
      phoneNumber: ''
    },
    visible: false
  }

  onSubmit = e => {
    e.preventDefault()
    const { user } = this.state

    axios
      .put(`https://aqueous-scrubland-35857.herokuapp.com/auth/doctor-profile/${user._id}`, user)
      .then(({ data }) => {
        console.log('Esta es la data del user', data)
        localStorage.setItem('user')
      })
      .catch(error => {
        console.log(error)
      })
  }

  //CODIGO DE ISA NO TOCAR BITCH
  componentDidMount() {
    if (localStorage.user) {
      let user = JSON.parse(localStorage.getItem('user'))
      this.setState({ user })
    }
    if (!localStorage.user) return this.props.history.push('/login')
  }

  handleInputs = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
  }

  handleClick = e => {
    console.log('click ', e)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  hideModal = () => {
    this.setState({
      visible: false
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

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
          <SiderDoctor history={this.props.history} />
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Content style={{ backgroundColor: 'white', padding: '5% 0 0 0' }}>
              <img alt="docprofile" src={user.imageProfile} width="120px" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>
                Hello! {user.name} {user.lastName}
              </h1>
              <p>Is any of your personal data wrong?.</p>
              {/* CONTAINER CARDS */}
              {/* SE MUESTRA SIN MODAL */}
              <section style={{ textAlign: 'start' }}>
                <div>
                  <div>
                    <label>
                      <b>Gender:</b> <span>{user.gender}</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <b>Proffesional ID:</b> <span>{user.professionalId}</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <b>University:</b> <span>{user.university}</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <b>Age:</b> <span>{user.age}</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <b>Phone Number:</b> <span>{user.phoneNumber}</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      <b>Email:</b> <span>{user.email}</span>
                    </label>
                  </div>
                </div>
                <br />
                <br />
              </section>
              {/* SE MUESTRA SIN MODAL */}

              {/* CARD UNICA */}
              <div>
                <Button
                  style={{
                    backgroundColor: '#ed5151',
                    margin: ' 0 0 10% 0',
                    border: 'none',
                    color: 'white'
                  }}
                  onClick={this.showModal}>
                  Edit Profile
                </Button>
                {/* MODAL */}
                <Modal
                  title="Edit your profile"
                  visible={this.state.visible}
                  okText=" "
                  okButtonProps={{ disabled: true }}
                  onCancel={this.handleCancel}>
                  <section style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
                      <Form onSubmit={this.onSubmit}>
                        <label>Name</label>
                        <Input
                          type="text"
                          name="name"
                          onChange={this.handleInputs}
                          defaultValue={user.name}
                        />
                        <label>Last Name</label>
                        <Input
                          name="lastName"
                          defaultValue={user.lastName}
                          onChange={this.handleInputs}
                          placeholder="Hernández"
                        />
                        <label>University</label>
                        <Input
                          name="university"
                          defaultValue={user.university}
                          onChange={this.handleInputs}
                          placeholder="UNAM"
                        />
                        <label>Phone Number</label>
                        <Input
                          name="phoneNumber"
                          defaultValue={user.phoneNumber}
                          onChange={this.handleInputs}
                          type="number"
                          placeholder="55 - 55 55 55 55"
                        />
                        <br />
                        <br />
                        <small>check that all your data is correct</small>
                        <br />
                        <br />
                        <Button htmlType="submit">Update your profile</Button>
                      </Form>
                    </Card>
                  </section>
                </Modal>
              </div>
            </Content>
          </div>
        </Layout>
        {/* <App /> */}
        <Footer />
      </div>
    )
  }
}

DoctorProfile.contextType = MyContext

export default DoctorProfile
