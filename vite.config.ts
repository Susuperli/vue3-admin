import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    ElementPlus({}),
    AutoImport({
      // api
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: false // 给eslint生成的配置，只需要一个词
      },
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      // 解析组件
      resolvers: [ElementPlusResolver()],
      // 可以解析自己写的组件
      dirs: ['src/components', 'src/layout']
    })
  ],
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
