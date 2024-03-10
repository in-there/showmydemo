import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import lazy from './hooks/lazy'

createApp(App)
.use(lazy)
.use(router)
.mount('#app')
