import React from 'react'
import { Layout } from 'antd'
const { Footer } = Layout

function FooterItem() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Jolteon made with tears and{' '}
      <span>
        <img src="/images/heart.svg" alt="footer" width="15px" />
      </span>
    </Footer>
  )
}

export default FooterItem
