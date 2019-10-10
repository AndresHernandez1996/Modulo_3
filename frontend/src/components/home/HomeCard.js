import React from 'react'
import { Card } from 'antd'
import { NavLink } from 'react-router-dom'
import '../../index.css'

function HomeCard() {
  return (
    <div style={{ width: 500 }}>
      <Card style={{ border: 'none', backgroundColor: 'none', textAlign: 'start' }}>
        <h1 style={{ fontSize: '8vw' }}>Welcome to </h1>
        <h1 style={{ fontSize: '8vw' }}> Jolteon!</h1>
        <hr />
        <span style={{ fontSize: '1.2vw' }}>
          We are very happy that you join the jolteon team, please register and start enjoying the
          application!
        </span>
        <br />
        <br />
        <p style={{ fontSize: '3vw' }}>Signup as ...</p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <NavLink style={{ margin: '0 2%' }} exact to="/doctor-signup">
            <button
              style={{
                fontSize: '1.7vw',
                padding: '.6vw 2vw',
                border: 'none',
                borderRadius: '50px',
                backgroundColor: '#ed5151',
                color: 'white'
              }}
              type="submit">
              Doctor
            </button>
          </NavLink>
          <NavLink style={{ margin: '0 2%' }} exact to="/patient-signup">
            <button
              style={{
                fontSize: '1.7vw',
                padding: '.6vw 2vw',
                border: 'none',
                borderRadius: '50px',
                backgroundColor: '#ed5151',
                color: 'white'
              }}
              type="submit">
              Patient
            </button>
          </NavLink>
        </div>
      </Card>
    </div>
  )
}

export default HomeCard
