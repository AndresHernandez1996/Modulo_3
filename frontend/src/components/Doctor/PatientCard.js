import React, { Component } from 'react'
import { Button, Modal, Input, Card, Form } from 'antd'
import axios from 'axios'

class PatientCard extends Component {
  state = {
    user: {
      user: []
    },
    prescription: {}
  }
  // createPrescription = () => {
  //   this.props.history.push(`/my-prescriptions/${this.user._id}`)
  //   console.log(this.user._id)
  //   // onClick = { this.props.history.push(`/my-prescriptions/${user._id}`) }
  // }

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

  componentDidMount() {
    axios
      .get('http://localhost:3000/auth/users')
      .then(({ data }) => {
        this.setState({ user: data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  onSubmit = e => {
    e.preventDefault()
    const { prescription } = this.state
    axios
      .post(`http://localhost:3000/doctor/create-prescription`, prescription)
      .then(({ data }) => {
        console.log('Esta es la prescription', data)
        this.setState({})
        // this.props.history.push(`/my-prescriptions/${this.state.user._id}`)
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleInputs = e => {
    const { prescription } = this.state
    const key = e.target.name
    prescription[key] = e.target.value
    this.setState({ prescription })
    console.log(this.state.prescription)
  }

  render() {
    const user = this.state.user.user
    console.log('Esto es lo del rendeer', user)
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around', flexFlow: 'wrap' }}>
        {user.map(user => (
          <div
            user={user}
            style={{
              border: '1px solid #e8e8e8',
              padding: ' 20px 20px 20px 20px',
              width: '28%',
              margin: '3% 0 3% 0'
            }}>
            <div
              style={{
                display: 'flex',
                flexFlow: 'column',
                fontSize: '10px',
                textAlign: 'start'
              }}>
              <span style={{ fontSize: '11.3px' }}>
                <b>Name: </b>
              </span>
              <span>{user.name}</span>
              <span style={{ fontSize: '11.3px' }}>
                <b> Lastname: </b>
              </span>
              <span>{user.lastName}</span>
              <span style={{ fontSize: '11.3px' }}>
                <b> Email:</b>
              </span>
              <span>{user.email}</span>
              <span style={{ fontSize: '11.3px' }}>
                <b>Age: </b>
              </span>
              <span>{user.age}</span>
            </div>
            <div style={{ margin: '5% 0' }}>
              <img src="/images/contact.svg" width="70px" alt="" />
            </div>
            <div style={{ textAlign: 'center' }}>
              <Button
                onClick={this.showModal}
                style={{
                  backgroundColor: '#ed5151',
                  margin: ' 0 0 10% 0',
                  border: 'none',
                  color: 'white',
                  fontSize: '11.3px'
                }}>
                Create presciption
              </Button>
              <Modal
                title="Create prescription"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}>
                <div
                  style={{
                    margin: '7% 0',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexFlow: 'wrap'
                  }}>
                  {/* FORM CONTACT */}
                  <Card style={{ border: 'none', fontSize: '5px', width: '40vw' }}>
                    <Form onSubmit={this.onSubmit}>
                      <label>Date</label>
                      <Input name="date" onChange={this.handleInputs} type="date" />
                      <label>Generic Denomination</label>
                      <Input
                        name="genericDenomination"
                        onChange={this.handleInputs}
                        type="text"
                        placeholder="Omeprazol"
                      />
                      <label>Dose & Frequency</label>
                      <Input
                        name="doseAndFrequency"
                        onChange={this.handleInputs}
                        type="text"
                        placeholder="2 every hour"
                      />
                      <label>Presentation</label>
                      <Input
                        name="presentation"
                        onChange={this.handleInputs}
                        type="text"
                        placeholder="250 mg"
                      />
                      <label>Patient Symptoms</label>
                      <Input
                        name="patientSymptoms"
                        onChange={this.handleInputs}
                        type="text"
                        placeholder="Headache, temperature and dizziness"
                      />
                      <label>Route of administration</label>
                      <Input
                        name="routeOfAdministration"
                        onChange={this.handleInputs}
                        type="text"
                        placeholder="Oral"
                      />
                      <label>Duration</label>
                      <Input
                        name="duration"
                        onChange={this.handleInputs}
                        type="text"
                        placeholder="1 week"
                      />
                      <label>Height of patient</label>
                      <Input
                        name="height"
                        onChange={this.handleInputs}
                        type="number"
                        placeholder="1.72"
                      />
                      <label>Weight of patient</label>
                      <Input
                        name="weight"
                        onChange={this.handleInputs}
                        type="number"
                        placeholder="80"
                      />
                      <label>Body Mass</label>
                      <Input
                        name="bodyMassIndex"
                        onChange={this.handleInputs}
                        type="number"
                        placeholder="80"
                      />
                      <br />
                      <br />
                      <Button htmlType="submit">Create</Button>
                    </Form>
                  </Card>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PatientCard
