import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import './assets/css/global.scss'

createApp(App).use(router).mount('#app')
