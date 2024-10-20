import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { API } from './vite.helper'
import { isTrue } from './src/common/booleanUtils.ts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { env, hosts } = API(mode)
  const { apiUrl } = hosts
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      open: isTrue(env.VITE_OPEN_BROWSER),
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
