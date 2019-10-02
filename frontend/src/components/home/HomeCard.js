import React from 'react'
import { Card } from 'antd'
import '../../index.css'

function HomeCard() {
  return (
    <div style={{ width: 500 }}>
      <Card style={{ border: 'none' }}>
        <h1 style={{ fontSize: '8vw' }}>Welcome to </h1>
        <h1 style={{ fontSize: '8vw' }}> Jolteon!</h1>
        <hr />
        <span style={{ fontSize: '1.5vw' }}>
          We are very happy that you join the jolteon team, please register and start enjoying the
          application!
        </span>
      </Card>
    </div>
  )
}

export default HomeCard
