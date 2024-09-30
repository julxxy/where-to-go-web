import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = createRoot(document.getElementById('root')!);
const mode = import.meta.env.MODE

const appElement =
    mode === 'production' || mode.includes("dev") ? (
        <StrictMode>
            <App/>
        </StrictMode>
    ) : (
        <App/>
    )

root.render(appElement)
