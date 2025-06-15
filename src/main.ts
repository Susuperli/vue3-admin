import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'normalize.css/normalize.css'

import router from './router'
import element from './plugins/element'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'uno.css'
import '@/styles/index.scss'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 持久化存储

app.use(router)
app.use(element)
app.use(pinia as any)
app.mount('#app')
