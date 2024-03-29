import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input, Button, Select, Card } from 'antd'
import Footer from '../home/Footer'
const { Option } = Select

class PatientSignup extends Component {
  state = {
    user: {
      name: '',
      lastName: '',
      gender: '',
      role: '',
      age: '',
      password: '',
      phoneNumber: '',
      email: ''
      // imageProfile:
      //   this.email && `https://www.gravatar.com/avatar/${md5(this.email)}?d=identicon&s=200`
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const { user } = this.state
    axios
      .post('https://aqueous-scrubland-35857.herokuapp.com/auth/signup', user)
      .then(({ data }) => {
        // console.log(data)
        this.setState({
          user: {
            name: '',
            lastName: '',
            gender: '',
            role: '',
            age: '',
            phoneNumber: '',
            email: ''
          }
        })
        this.props.history.push('/login')
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleInputs = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
    // console.log(this.state.user)
  }

  handleSelect = value => {
    const { user } = this.state
    user.gender = value
    this.setState({ user })
  }

  handleSelect2 = value => {
    const { user } = this.state
    user.role = value
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    // console.log(user)
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
            <NavLink style={{ margin: '0 2%' }} exact to="/login">
              <button
                style={{ border: 'none', margin: '0 2%', borderRadius: '50px', color: '#ed5151' }}
                className="btn btn-light my-2 my-sm-0"
                type="submit">
                Login
              </button>
            </NavLink>
            <NavLink exact to="/">
              <button
                color="#ed5151"
                style={{ border: 'none', borderRadius: '50px', color: '#ed5151' }}
                className="btn  btn-light my-2 my-sm-0"
                type="submit">
                Home
              </button>
            </NavLink>
          </div>
        </nav>
        <section style={{ display: 'flex', justifyContent: 'center' }}>
          <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
            <Form onSubmit={this.onSubmit}>
              <h2>Sign up</h2>
              <label>Name</label>
              <Input
                name="name"
                value={user.name}
                onChange={this.handleInputs}
                placeholder="Andrés"
              />
              <label>Last Name</label>
              <Input
                name="lastName"
                value={user.lastName}
                onChange={this.handleInputs}
                placeholder="Hernández"
              />
              <label>Gender</label>
              <Select name="gender" onChange={this.handleSelect} placeholder="Male">
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
              <label>Age</label>
              <Input
                name="age"
                value={user.age}
                onChange={this.handleInputs}
                type="number"
                placeholder="0 - 100"
              />
              <label>Role</label>
              {/* <Input name="age" onChange={this.selectRole} type="text" placeholder="Patient" /> */}
              <Select name="role" onChange={this.handleSelect2}>
                <Option value="Patient">Patient</Option>
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
                name="email"
                value={user.email}
                onChange={this.handleInputs}
                type="email"
                placeholder="jolteon@jolteon.com"
              />
              <label>Password</label>
              <Input
                name="password"
                value={user.password}
                onChange={this.handleInputs}
                type="password"
                placeholder="J0lteON96"
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
        <Footer />
      </div>
    )
  }
}
export default PatientSignup
