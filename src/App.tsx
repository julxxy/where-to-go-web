import '@/App.css'
import NavFooter from '@/components/NavFooter'
import NaviHeader from '@/components/NaviHeader'
import AntdGlobalProvider, { useThemeToken } from '@/context/AntdGlobalProvider.ts'
import { App as AntdApp, ConfigProvider, theme } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US'
import useZustandStore from '@/store/useZustandStore.ts'
import { Environment } from '@/types/appEnum.ts'

function App() {
  const { isDarkEnable } = useZustandStore()
  return (
    <ConfigProvider
      theme={{
        ...useThemeToken,
        algorithm: isDarkEnable ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
      locale={Environment.isLocaleCN ? zhCN : enUS}
    >
      <AntdApp>
        <AntdGlobalProvider />
        {/*<RouterProvider router={router} />*/}
        <div className="app">
          <NaviHeader />
          <NavFooter />
        </div>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
