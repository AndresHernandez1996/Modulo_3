import React from 'react'
import 'antd/dist/antd.css'
import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'antd'
import Footer from './Footer'

function Content() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <img
            style={{ margin: '0 0 0 13%' }}
            src="https://static.vecteezy.com/system/resources/previews/000/628/092/non_2x/vector-scan-qr-code-payment-concepts-with-character-creative-flat-design-for-web-banner.jpg"
            alt="d"
            width="75%"
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <img src="images/AmbulanceMain.jpg" alt="dt" width="100%" />
          <h3>2</h3>
        </div>
        <div>
          <img
            style={{ margin: '0 0 0 13%' }}
            src="https://i.ytimg.com/vi/RIxCUiF6AVM/maxresdefault.jpg"
            alt="54"
            width="75%"
          />
          <h3>3</h3>
        </div>
      </Carousel>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexFlow: 'wrap',
          margin: '5% 0',
          textAlign: 'center',
          height: 300,
          alignItems: 'center'
        }}>
        <div width="25%">
          <img alt="h" src="/images/alert.svg" width="90vw" />
          <p style={{ marginTop: 30 }}>Get help from people around you</p>
        </div>
        <div width="25%">
          <img alt="h" src="/images/hospital.svg" width="90vw" />
          <p style={{ marginTop: 30 }}>Find hospitals near you</p>
        </div>
        <div width="25%">
          <img alt="h" src="/images/shield.svg" width="90vw" />
          <p style={{ marginTop: 30 }}>Use the app at all times</p>
        </div>
        <div width="25%">
          <img alt="h" src="/images/stethoscope.svg" width="90vw" />
          <p style={{ marginTop: 30 }}>Get assistance from specialized doctors</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Content
