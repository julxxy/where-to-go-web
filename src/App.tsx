import '@/App.css'
import styles from '@/components/Robot.module.css'
import robots from '@/mockdata/robots.json'
import Robot from '@/components/Robot.tsx'
import ThemeSwitch from '@/components/theme'
import { ShoppingCart } from '@/components/ShopingCart.tsx'

function App() {
  return (
    <div style={{}}>
      <div style={{}}>
        <ThemeSwitch />
      </div>
      <div className={styles.cardContainer} style={{ display: 'flex', flex: '1' }}>
        <ul>
          {robots.map(({ id, name, email }) => (
            <Robot id={id} name={name} email={email} key={id} />
          ))}
        </ul>
      </div>
      <ShoppingCart />
    </div>
  )
}

export default App
