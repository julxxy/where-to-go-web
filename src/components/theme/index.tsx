import { Switch } from 'antd'
import { MoonIcon, SunIcon } from '@/components/theme/ThemeIcon.tsx'
import useZustandStore from '@/store/useZustandStore.ts'
import { useEffect } from 'react'

/**
 * 主题切换组件
 */
export default function ThemeSwitch() {
  const { isDarkEnable, setIsDarkEnable } = useZustandStore()

  useEffect(() => {
    updateTheme()
  }, [isDarkEnable])

  function updateTheme() {
    if (isDarkEnable) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }

  return (
    <Switch
      checkedChildren={<SunIcon />}
      unCheckedChildren={<MoonIcon />}
      checked={!isDarkEnable}
      onChange={setIsDarkEnable}
      style={{ backgroundColor: isDarkEnable ? '#676767' : '#ffffff' }}
    />
  )
}
