import React, { Component } from 'react'
import axios from 'axios'

class PublicCard extends Component {
  state = {
    user: {
      user: []
    },
    contacts: []
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({ user })
    axios
      .get('http://localhost:3000/contact/contacts')
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
    const contacts = this.state.contacts
    console.log('Soy el user del render!', contacts)
    return (
      <div>
        {contacts.map(contact => (
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
              <h5 style={{ fontSize: '13.3px', color: 'red' }}>
                <b>Name: </b>
              </h5>
              <h5>
                <b>{contact.name}</b>
              </h5>
              <h5 style={{ fontSize: '13.3px', color: 'red' }}>
                <b>Lastname: </b>
              </h5>
              <h5>
                <b>{contact.lastName}</b>
              </h5>
              <h5 style={{ fontSize: '13.3px', color: 'red' }}>
                <b> Age:</b>
              </h5>
              <h5>
                <b>{contact.age}</b>
              </h5>
              <h5 style={{ fontSize: '13.3px', color: 'red' }}>
                <b>Family RelationShip: </b>
              </h5>
              <h5>
                <b>{contact.familyRelationship}</b>
              </h5>
              <h5 style={{ fontSize: '13.3px', color: 'red' }}>
                <b>Phone Number: </b>
              </h5>
              <h5>
                <b>{contact.phoneNumber}</b>
              </h5>
              <br />
              <br />
            </div>
            <div
              style={{
                margin: '5% 0',
                textAlign: 'center'
              }}>
              <img src="/images/contact.svg" width="90px" alt="usuario" />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PublicCard
