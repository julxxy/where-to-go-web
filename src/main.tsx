import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App.tsx'
import '@/index.css'
import { Environment } from '@/types/appEnum.ts'

const root = createRoot(document.getElementById('root')!)

const appElement = Environment.isProduction() ? (
  <StrictMode>
    <App />
  </StrictMode>
) : (
  <App />
)

root.render(appElement)
