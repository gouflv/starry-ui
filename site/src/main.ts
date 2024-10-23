import 'ant-design-vue/dist/reset.css'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.mount('#app')
