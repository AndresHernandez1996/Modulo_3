import React, { Component } from 'react'
import { Button } from 'antd'

class ContactCard extends Component {
  render() {
    return (
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
            <b>Doctor: </b>
          </h5>
          <p>Enrique Ramirez</p>
          <h5 style={{ fontSize: '11.3px' }}>
            <b>Hospital: </b>
          </h5>
          <p>Angeles lomas</p>
          <h5 style={{ fontSize: '11.3px' }}>
            <b> Date:</b>
          </h5>
          <p>30 / 09 / 2019</p>
          <h5 style={{ fontSize: '11.3px' }}>
            <b>Prescription: </b>
          </h5>
          <p>Manage your information and privacy and security options t</p>
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
    )
  }
}

export default ContactCard
