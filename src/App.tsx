import '@/App.css'
import styles from '@/components/Robot.module.css'
import robots from '@/mockdata/robots.json'
import Robot from '@/components/Robot.tsx'
import ThemeSwitch from '@/components/theme'

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flex: '1' }}>
        <ThemeSwitch />
      </div>
      <div className={styles.cardContainer} style={{ display: 'flex', flex: '1' }}>
        <ul>
          {robots.map(({ id, name, email }) => (
            <Robot id={id} name={name} email={email} key={id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
