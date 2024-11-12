import React from 'react'
import { Col, Divider, Row, Typography } from 'antd'
import styles from '@/components/businessPartner/BusinessPartner.module.css'

import image1 from '/images/microsoft-80658_640.png'
import image2 from '/images/icon-720944_640.png'
import image3 from '/images/follow-826033_640.png'
import image4 from '/images/facebook-807588_640.png'

const companies = [
  { src: image1, title: 'Microsoft' },
  { src: image2, title: 'Youtube' },
  { src: image3, title: 'Ins' },
  { src: image4, title: 'Facebook' },
]

export const BusinessPartner: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title level={5}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {companies.map((c, index) => (
          <Col span={6} key={'business-partner-' + index}>
            <img
              alt="bussiness-partner"
              src={c.src}
              style={{
                width: '50%',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
