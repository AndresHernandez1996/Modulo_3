import React, { Component } from 'react'
import { MyContext } from '../../context'
import { NavLink } from 'react-router-dom'
import { Layout } from 'antd'
import axios from 'axios'
import Footer from '../home/Footer'
import PublicCard from './PublicCard'
import MapPatient from './MapPatient'
const { Content } = Layout

class PatientEmergency extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({ user })
    axios
      .get('https://aqueous-scrubland-35857.herokuapp.com/contact/contacts')
      .then(({ data }) => {
        let contactsArr = []
        this.setState({ contacts: data.contact })
        const contacts = this.state.contacts
        contacts.forEach(contact => {
          const parent = contact.parent
          if (this.state.user._id === parent[0]) {
            contactsArr.push(contact)
            this.setState({ contacts: contactsArr })
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const user = this.state.user
    // console.log('tarigo esta info', user)
    return (
      <div>
        <nav
          style={{ padding: '.6% 5% .6% 5%', backgroundColor: '#ed5151' }}
          className="navbar navbar-expand-lg navbar-light ">
          <a style={{ color: 'white' }} className="navbar-brand" href="/">
            JOLTEON
          </a>
          <NavLink exact to="/">
            <button
              color="#ed5151"
              style={{ border: 'none', borderRadius: '50px', color: '#ed5151' }}
              className="btn  btn-light my-2 my-sm-0">
              Meet Jolteon!
            </button>
          </NavLink>
        </nav>
        {/* EMPIEZA SIDE NAV */}

        {/* TERMINA SIDE NAV */}

        <Layout>
          <div
            style={{
              textAlign: 'center',
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }}>
            <Content style={{ backgroundColor: 'white', padding: '5% 0 0 0' }}>
              <img alt="QRcode" src="/images/alert.svg" width="120vw" />
              <br />
              <br />
              <h1 style={{ textAlign: 'center' }}>Emergency!</h1>
              <section style={{ width: '85%', textAlign: 'center', margin: '7%' }}>
                <p>
                  If you are seeing this QR code it is very likely that{' '}
                  <b>
                    {user.name} {user.lastName}
                  </b>{' '}
                  is at risk, please call some of his contacts or take him to the nearest hospital
                </p>
              </section>
              <div style={{ margin: '0 20%' }}>
                <PublicCard />
              </div>
            </Content>
          </div>
          <div>
            <MapPatient />
          </div>
        </Layout>
        <Footer />
      </div>
    )
  }
}

PatientEmergency.contextType = MyContext

export default PatientEmergency
