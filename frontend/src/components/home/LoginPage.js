import React from 'react'
import 'antd/dist/antd.css'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import Content from './Content'

function LoginPage() {
  return (
    <div>
      {/*COMIENZA NAVBAR  */}
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
                About <span className="sr-only">(current)</span>
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
          <NavLink exact to="signup">
            <button
              color="#ed5151"
              style={{ border: 'none', borderRadius: '50px', color: '#ed5151' }}
              className="btn  btn-light my-2 my-sm-0"
              type="submit">
              Signup
            </button>
          </NavLink>
        </div>
      </nav>
      {/*TERMINA NAVBAR  */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '5% 0 6% 0',
          height: 520,
          alignItems: 'center'
        }}>
        <div>
          {/*Aqui va una tarjeta*/}
          <Login />
        </div>
        <div>
          <img alt="h" src="./images/heart.svg" width="300vh" />
        </div>
      </section>
      <Content />
    </div>
  )
}

export default LoginPage
