import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { API } from './vite.helper'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { hosts } = API(mode)
  const { apiUrl } = hosts
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      open: false,
      proxy: {
        '/api': {
          target: apiUrl,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
