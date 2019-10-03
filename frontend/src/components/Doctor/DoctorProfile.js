import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout, Card, Form, Input, Select, Button, Modal } from 'antd'
import Footer from '../home/Footer'
import axios from 'axios'
const { Sider, Content } = Layout
const { Option } = Select

class DoctorProfile extends Component {
  state = {
    user: {
      name: '',
      lastName: '',
      gender: '',
      role: '',
      professionalId: '',
      medicalspeciality: '',
      university: '',
      age: '',
      password: '',
      phoneNumber: '',
      email: ''
    },
    visible: false
  }

  onSubmit = e => {
    e.preventDefault()
    const { user } = this.state
    axios
      .post(`http://localhost:3000/auth/profile/${this.props.params.id}`, user)
      .then(({ data }) => {
        console.log(data)
        this.setState({
          user: {
            name: '',
            lastName: '',
            gender: '',
            role: '',
            professionalId: '',
            medicalspeciality: '',
            university: '',
            age: '',
            password: '',
            phoneNumber: '',
            email: ''
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    if (!this.context.state.loggedUser) return this.props.history.push('/login')
    const userData = this.context.state.loggedUser
    this.setState(userData)
  }

  handleInputs = e => {
    // const { user } = this.state
    // const key = e.target.name
    // user[key] = e.target.value
    // this.setState({ user })
    // console.log(this.state.user)
    this.setState({
      user: { [e.target.name]: e.target.value }
    })
  }

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
    this.props.history.push('/doctor-profile')
  }

  showModal = () => {
    this.setState({
      visible: true
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
    let user = this.state
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
              defaultSelectedKeys={['4']}
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
              <img src={user.imageProfile} width="120px" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>
                Hello! {user.name} {user.lastName}
              </h1>
              <p>Is any of your personal data wrong?.</p>
              {/* CONTAINER CARDS */}
              {/* SE MUESTRA SIN MODAL */}
              <section style={{ textAlign: 'start' }}>
                <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
                  <Form onSubmit={this.onSubmit}>
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
                  </Form>
                </Card>
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
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}>
                  <section style={{ display: 'flex', justifyContent: 'center' }}>
                    <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
                      <Form onSubmit={this.onSubmit}>
                        <label>Name</label>
                        <Input
                          type="text"
                          name="name"
                          placeholder={user.name}
                          onChange={this.handleInputs}
                          required
                          value={user.name}
                        />
                        <label>Last Name</label>
                        <Input
                          name="lastName"
                          value={user.lastName}
                          onChange={this.handleInputs}
                          placeholder="Hernández"
                        />
                        <label>Gender</label>
                        <Select
                          name="gender"
                          readOnly
                          onChange={this.handleSelect}
                          placeholder="Male">
                          <Option value="Male">Male</Option>
                          <Option value="Female">Female</Option>
                          <Option value="Other">Other</Option>
                        </Select>
                        <label>Professional ID</label>
                        <Input
                          readOnly
                          name="professionalId"
                          value={user.professionalId}
                          onChange={this.handleInputs}
                          placeholder="1629426|C1"
                        />
                        <label>Medical Speciality</label>
                        <Input
                          readOnly
                          name="medicalspeciality"
                          value={user.medicalspeciality}
                          onChange={this.handleInputs}
                          placeholder="Surgeon"
                        />
                        <label>University</label>
                        <Input
                          name="university"
                          value={user.university}
                          onChange={this.handleInputs}
                          placeholder="UNAM"
                        />
                        <label>Age</label>
                        <Input
                          name="age"
                          value={user.age}
                          onChange={this.handleInputs}
                          type="number"
                          placeholder="0 - 100"
                        />
                        <label>Role</label>
                        <Select
                          readOnly
                          name="role"
                          onChange={this.handleSelect2}
                          placeholder="Doctor">
                          <Option value="Doctor">Doctor</Option>
                        </Select>
                        <label>Phone Number</label>
                        <Input
                          name="phoneNumber"
                          value={user.phoneNumber}
                          onChange={this.handleInputs}
                          type="number"
                          placeholder="55 - 55 55 55 55"
                        />
                        <label>Email</label>
                        <Input
                          readOnly
                          name="email"
                          value={user.email}
                          onChange={this.handleInputs}
                          type="email"
                          placeholder="jolteon@jolteon.com"
                        />
                        <br />
                        <br />
                        <small>If you signup, you agree with all our terms and conditions </small>
                        <br />
                        <br />
                        <Button htmlType="submit">Create account</Button>
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
