import '@/App.css'

import robots from './mockdata/robots.json'
import Robot from '@/components/Robot.tsx'
import { Switch } from 'antd'
import useZustandStore from '@/store/useZustandStore.ts'
import { MoonIcon, SunIcon } from '@/components/ThemeIcon.tsx'
import { useEffect } from 'react'

function App() {
  const { isDarkEnable, setIsDarkEnable } = useZustandStore()

  useEffect(() => {
    updateTheme()
  }, [isDarkEnable])

  function updateTheme() {
    if (isDarkEnable) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  return (
    <div style={{ backgroundColor: 'var(--color-bg-primary)', display: 'flex', flex: 1 }}>
      <Switch
        checkedChildren={<SunIcon />}
        unCheckedChildren={<MoonIcon />}
        checked={!isDarkEnable}
        onChange={setIsDarkEnable}
        style={{ backgroundColor: isDarkEnable ? '#676767' : '#ffffff' }}
      />
      <ul>
        {robots.map(({ id, name, email }) => (
          <Robot id={id} name={name} email={email} key={id} />
        ))}
      </ul>
    </div>
  )
}

export default App
