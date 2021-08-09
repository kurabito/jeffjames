import { createApp } from 'vue'
import App from './App.vue'

// import router from './router'
import createRouter from './router';

createApp(App).use(createRouter()).mount('#app')
