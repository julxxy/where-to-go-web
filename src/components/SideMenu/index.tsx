import styles from '@/components/SideMenu/index.module.css'
import React from 'react'
import { Menu } from 'antd'
import { sideMenuList } from '@/components/SideMenu/mockup.ts'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu
      mode="vertical"
      className={styles.sideMenu}
      items={sideMenuList.map(m => ({
        label: m.title,
        key: m.title,
        icon: <GifOutlined />,
        children: m.subMenu.map(sm => ({
          label: sm.title,
          key: sm.title,
          icon: <GifOutlined />,
          children: sm.subMenu.map(sms => ({
            label: sms,
            key: sms,
            icon: <GifOutlined />,
          })),
        })),
      }))}
    />
  )
}
