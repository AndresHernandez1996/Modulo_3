import React, { Component } from 'react'
import { Button } from 'antd'
import axios from 'axios'

class ContactCard extends Component {
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
              <h5 style={{ fontSize: '11.3px' }}>
                <b>Name: </b>
              </h5>
              <p>{contact.name}</p>
              <h5 style={{ fontSize: '11.3px' }}>
                <b>Lastname: </b>
              </h5>
              <p>{contact.lastName}</p>
              <h5 style={{ fontSize: '11.3px' }}>
                <b> Age:</b>
              </h5>
              <p>{contact.age}</p>
              <h5 style={{ fontSize: '11.3px' }}>
                <b>Family RelationShip: </b>
              </h5>
              <p>{contact.familyRelationship}</p>
              <h5 style={{ fontSize: '11.3px' }}>
                <b>Phone Number: </b>
              </h5>
              <p>{contact.phoneNumber}</p>
              <br />
              <br />
            </div>
            <div
              style={{
                margin: '5% 0',
                textAlign: 'center',
                fontSize: '11.3px'
              }}>
              <img src="/images/contact.svg" width="90px" alt="usuario" />
              <div style={{ magin: ' 15% 0' }}>
                <Button
                  style={{
                    backgroundColor: '#ed5151',
                    margin: ' 3% 0 3% 0',
                    border: 'none',
                    color: 'white'
                  }}>
                  Delete contact
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ContactCard
