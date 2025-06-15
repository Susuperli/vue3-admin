import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  server: {
    port: 5100,
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
