import styles from '@/components/NaviHeader/idnex.module.css'
import { Button, Dropdown, Input, Layout, Menu, Space, Typography } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import ThemeSwitch from '@/components/theme'
import ButtonGroup from 'antd/es/button/button-group'
import logo from '@/assets/react.svg'

const NaviHeader = () => {
  const title = import.meta.env.VITE_APP_TITLE as string
  return (
    <div className={styles.appHeader}>
      <div className={styles.topHeader}>
        <div className={styles.topInnerBox}>
          <div className={styles.slogan}>
            <Typography.Text>旅游让生活更美好</Typography.Text>
          </div>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            menu={{
              items: [
                { label: '中文', key: '1' },
                { label: 'English', key: '2' },
              ],
            }}
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Space>
            <ThemeSwitch />
            <ButtonGroup>
              <Button>登录</Button>
              <Button>注册</Button>
            </ButtonGroup>
          </Space>
        </div>
      </div>
      <Layout.Header className={styles.mainHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <Typography.Title level={3} className={styles.title}>
          {title}
        </Typography.Title>
        <Input.Search className={styles.searchInput} placeholder={'请输入旅游目的地、主题、或关键字'} />
      </Layout.Header>
      <Menu
        mode="horizontal"
        className={styles.mainMenu}
        items={[
          { key: '1', label: '旅游首页' },
          { key: '2', label: '周末游' },
          { key: '3', label: '跟团游' },
          { key: '4', label: '自由行' },
          { key: '5', label: '私家团' },
          { key: '6', label: '邮轮' },
          { key: '7', label: '酒店+景点' },
          { key: '8', label: '当地玩乐' },
          { key: '9', label: '主题游' },
          { key: '10', label: '定制游' },
          { key: '11', label: '游学' },
          { key: '12', label: '签证' },
          { key: '13', label: '企业游' },
          { key: '14', label: '高端游' },
          { key: '15', label: '爱玩户外' },
          { key: '16', label: '保险' },
        ]}
      />
    </div>
  )
}

export default NaviHeader
