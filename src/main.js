import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Store from './store/index'
import './index.css'

createApp(App).use(Store).use(router).mount('#app')
