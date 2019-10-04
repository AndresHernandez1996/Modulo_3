import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Menu, Icon, Layout, Card, Form, Input, Select, Button, Modal } from 'antd'
import Footer from '../home/Footer'
import axios from 'axios'
const { Sider, Content } = Layout
const { Option } = Select

class CreatePrescription extends Component {
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
        console.log(`<<<<<<<<<<<<<<<<`, data)
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

  //   componentDidMount() {
  //     if (!this.context.state.loggedUser) return this.props.history.push('/login')
  //     const userData = this.context.state.loggedUser
  //     this.setState(userData)
  //   }

  handleInputs = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
    console.log('<<<<<<<<<<hfgfgfgfgfgf<<<<<<', this.state.user)
    // this.setState({
    //   user: { [e.target.name]: e.target.value }
    // })
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
                    <h1>Hola</h1>
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
                      <Input
                        name="age"
                        onChange={this.handleInputs}
                        type="number"
                        placeholder="20"
                      />
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
                  onCancel={this.handleCancel}></Modal>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Título:</label>
                    </td>{' '}
                    <td>
                      <input type="text" name="title" required />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Descripción:</label>
                    </td>
                    <td>
                      <textarea type="text" name="description" required />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Imagen:</label>
                    </td>
                    <td>
                      <input type="file" name="image" required />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Campo:</label>
                    </td>
                    <td>
                      <select defaultValue="-" name="field" required>
                        <option value="-" disabled>
                          ---
                        </option>
                        <option value="literatura">Literatura</option>
                        <option value="arteycultura">Arte y Cultura</option>
                        <option value="cienciaytecnologia">Ciencia y Tecnología</option>
                        <option value="emprendimiento">Emprendimiento</option>
                        <option value="educacion">Educación</option>
                        <option value="otros">Otro</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Premio:</label>
                    </td>
                    <td>
                      <input type="text" name="prize" required />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Tipo de cambio:</label>
                    </td>
                    <td>
                      <select defaultValue="-" name="prizeCurrency" required>
                        <option value="-" disabled>
                          ---
                        </option>
                        <option value="MXN">MXN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Último día para aplicar:</label>
                    </td>
                    <td>
                      <input type="date" name="endDate" required />
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: 'right' }}>
                      <label>Link de la convocatoria:</label>
                    </td>
                    <td>
                      <input type="text" name="link" required />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Content>
          </div>
        </Layout>
        {/* <App /> */}
        <Footer />
      </div>
    )
  }
}

CreatePrescription.contextType = MyContext

export default CreatePrescription
