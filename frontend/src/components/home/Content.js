import React from 'react'
import 'antd/dist/antd.css'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'antd'
import Footer from './Footer'

function Content() {
  return (
    <div>
      <Carousel effect="fade">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          margin: '5% 0',
          textAlign: 'center',
          height: 300,
          alignItems: 'center'
        }}>
        <div>
          <div>
            <img alt="h" src="/images/alert.svg" width="80vw" />
          </div>
          <div>
            <p>Descripcixcmnxmcnmxcnmxnc kxnc mncxon</p>
          </div>
        </div>
        <div>
          <img alt="h" src="/images/ambulance.svg" width="80vw" />
          <p>Descripcixcmnxmcnmxcnmxnc kxnc mncxon</p>
        </div>
        <div>
          <img alt="h" src="/images/shield.svg" width="80vw" />
          <p>Descripcixcmnxmcnmxcnmxnc kxnc mncxon</p>
        </div>
        <div>
          <img alt="h" src="/images/stethoscope.svg" width="80vw" />
          <p>Descripcixcmnxmcnmxcnmxnc kxnc mncxon</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Content
