import React from 'react'
import styles from '@/components/Content/index.module.css'
import AppCarousel from '@/components/carousel/Carousel.tsx'
import { SideMenu } from '@/components/SideMenu'

export const Content: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.sideMenu}>
        <SideMenu />
      </div>
      <div className={styles.carousel}>
        <AppCarousel />
      </div>
      <div className={styles.product}></div>
    </div>
  )
}
