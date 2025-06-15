import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'normalize.css/normalize.css'

import router from './router'

import 'element-plus/dist/index.css'
import 'uno.css'
import '@/styles/index.scss'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(ElementPlus)
app.use(pinia as any)
app.mount('#app')
