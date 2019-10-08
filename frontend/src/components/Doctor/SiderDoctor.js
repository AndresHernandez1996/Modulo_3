import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout

export default class SiderDoctor extends Component {
  state = {
    user: {},
    visible: false
  }
  registerConsult = () => {
    this.props.history.push(`/register-consult/${this.state.user._id}`)
  }

  myPrescriptions = () => {
    this.props.history.push(`/my-prescriptions/${this.state.user._id}`)
  }

  doctorProfile = () => {
    this.props.history.push(`/doctor-profile/${this.state.user._id}`)
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
    )
  }
}
