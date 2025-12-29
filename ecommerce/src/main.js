import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './Router'

createApp(App).use(router).mount('#app')
