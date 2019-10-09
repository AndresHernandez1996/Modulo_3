import React from 'react'
import { Card} from 'antd'
import {NavLink} from 'react-router-dom'

function NotFound() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', margin: '12% 0' }}>
      <Card
        style={{ width: 300, border: 'none' }}
        cover={<img alt="example" src="/images/error.svg" />}>
        <div style={{ fontSize:'2vw'}}>
          <b> PAGE NOT FOUND</b>
        </div>
        <NavLink style={{ margin: '0 2%' }} exact to="/">
          <button
            style={{
              fontSize: '2.7vw',
              padding: '.6vw 2vw',
              border: 'none',
              borderRadius: '50px',
              backgroundColor: '#ed5151',
              color: 'white',
              margin: '15% 0'
            }}
            type="submit">
            Go Home!
          </button>
        </NavLink>
      </Card>
    </div>
  )
}

export default NotFound
