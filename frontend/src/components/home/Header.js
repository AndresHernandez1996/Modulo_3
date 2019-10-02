import React from 'react'
import 'antd/dist/antd.css'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeCard from './HomeCard'

function Header() {
  return (
    <div>
      {/*COMIENZA HEADER */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '5% 0 6% 0',
          height: 520,
          alignItems: 'center'
        }}>
        <div>
          {/*Aqui va una tarjeta*/}
          <HomeCard />
        </div>
        <div>
          {/* <h1 style={{ margin: ' 0 0 15% 0' }}>Welcome to Jolteon!</h1>
          <img alt="h" src="/images/mainheart.jpg" width="500vh" /> */}
          <img alt="h" src="./images/heart.svg" width="300vh" />
        </div>
      </section>
      {/*TERMINA HEADER */}
    </div>
  )
}

export default Header
