import React from 'react'
import { Card } from 'antd'
const { Meta } = Card

function NotFound() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', margin: '17%' }}>
      <Card
        hoverable
        style={{ width: 240, border: 'none' }}
        cover={<img alt="example" src="/images/error.svg" />}>
        <Meta title="PAGE NOT FOUND" description="" />
      </Card>
    </div>
  )
}

export default NotFound
