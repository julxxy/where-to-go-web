import styles from '@/components/NavFooter/index.module.css'

const NavFooter = () => {
  const links = [
    {
      label: '中国电子口岸一站式加签方案',
      href: 'https://github.com/Weasley-J/chinaport-data-signature',
    },
    {
      label: '乐璟商城（分布式微服务）',
      href: 'https://github.com/Weasley-J/lejing-mall',
    },
    {
      label: '乐璟OPS（React v18.3.x）',
      href: 'https://github.com/Weasley-J/lejing-dashboard-pro',
    },
    {
      label: 'Where to Go Web（React v18.3.x）',
      href: 'https://github.com/Weasley-J/where-to-go-web',
    },
  ]
  return (
    <div className={styles.footer}>
      <div>
        {links.map(({ label, href }, index) => (
          <span key={href}>
            <a href={href} target="_blank" rel="noreferrer">
              {label}
            </a>
            {index < links.length - 1 && <span className="gutter">|</span>}
          </span>
        ))}
      </div>
      <div>
        <a href="https://github.com/Weasley-J" target="_blank" rel="noreferrer">
          WhereToGo旅游网 ©{new Date().getFullYear()} Powered by Weasley
        </a>
      </div>
    </div>
  )
}

export default NavFooter
