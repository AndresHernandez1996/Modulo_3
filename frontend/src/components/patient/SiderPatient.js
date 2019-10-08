import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

class SiderPatient extends Component {
  state = {
    user: {},
    visible: false
  }
  recentVisits = () => {
    this.props.history.push(`/patient-profile/${this.state.user._id}`)
  }

  createContact = () => {
    this.props.history.push(`/create-contact/${this.state.user._id}`)
  }
  contacts = () => {
    this.props.history.push(`/contacts/${this.state.user._id}`)
  }
  qrCode = () => {
    this.props.history.push(`/qr-emergency/${this.state.user._id}`)
  }

  componentDidMount() {
    if (localStorage.user) {
      let user = JSON.parse(localStorage.user)
      this.setState({ user })
    }
    if (!localStorage.user) return this.props.history.push('/login')
  }

  render() {
    return (
      <Sider style={{ backgroundColor: 'white' }}>
        <Menu
          style={{ border: '', width: '205px' }}
          defaultSelectedKeys={[]}
          defaultOpenKeys={['sub1']}>
          <Menu.Item onClick={this.recentVisits} key="1">
            <Icon type="solution" />
            Recent medical visits
          </Menu.Item>
          <Menu.Item onClick={this.createContact} key="2">
            <Icon type="user-add" />
            Create contact
          </Menu.Item>
          <Menu.Item onClick={this.contacts} key="3">
            <Icon type="team" />
            Contacts
          </Menu.Item>
          <Menu.Item onClick={this.qrCode} key="5">
            <Icon type="qrcode" />
            QR Code
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default SiderPatient
