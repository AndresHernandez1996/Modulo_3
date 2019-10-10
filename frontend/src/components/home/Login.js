import React, { Component } from 'react'
import '../../index.css'
import { Form, Input, Button, Icon, Card } from 'antd'
import { NavLink } from 'react-router-dom'
import Content from './Content'
import { MyContext } from '../../context'
import AUTH_SERVICE from '../../services/index'

class Login extends Component {
  state = {
    user: {
      email: '',
      password: ''
    }
  }

  handleInputs = e => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({ user })
    // console.log(this.state.user)
  }

  onSubmit = e => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.user)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        if (response.data.user.role === 'Doctor') {
          this.props.history.push(`/doctor-profile/${response.data.user._id}`)
        } else {
          this.props.history.push(`/patient-profile/${response.data.user._id}`)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    return (
      <div>
        {/*COMIENZA NAVBAR  */}
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
            <NavLink style={{ margin: '0 2%' }} exact to="/">
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
        {/*TERMINA NAVBAR  */}
        <section
          style={{
            margin: '5% 0 6% 0',
            height: 520,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            textAlign:'start'
          }}>
          <div style={{ width: 500 }}>
            <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
              <Form onSubmit={this.onSubmit}>
                <h2>Login</h2>
                <label>Email</label>
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  name="email"
                  onChange={this.handleInputs}
                  type="text"
                  placeholder="jolteon@jolteon.com"
                  required
                />
                <label>Password</label>
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  name="password"
                  onChange={this.handleInputs}
                  type="password"
                  placeholder="AltoVenti98"
                  required
                />
                <br />
                <br />
                <small>If you signup, you agree with all our terms and conditions </small>
                <br />
                <br />
                <Button htmlType="submit">Go!</Button>
              </Form>
            </Card>
          </div>
          <div>
            <img alt="h" src="./images/heart.svg" width="300vh" />
          </div>
        </section>
        <Content />
      </div>
    )
  }
}

Login.contextType = MyContext

export default Login
