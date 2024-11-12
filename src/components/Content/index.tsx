import React from 'react'
import styles from '@/components/Content/index.module.css'
import AppCarousel from '@/components/carousel/Carousel.tsx'
import { SideMenu } from '@/components/SideMenu'
import ProductCollection from '@/components/product/Product.tsx'
import { Typography } from 'antd'
import { productList1, productList2, productList3 } from '@/mockdata/mockups.ts'
import sideImage1 from '/images/sider_2019_12-09.png'
import sideImage2 from '/images/sider_2019_02-04.png'
import sideImage3 from '/images/sider_2019_02-04-2.png'

export const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.sideBox}>
        <div className={styles.sideMenu}>
          <SideMenu />
        </div>
        <div className={styles.carousel}>
          <AppCarousel />
        </div>
      </div>
      <div className={styles.product}>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              爆款推荐
            </Typography.Title>
          }
          sideImage={sideImage1}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              新品上市
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
      </div>
    </div>
  )
}
