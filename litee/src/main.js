import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import ui from '@nuxt/ui/vite'
import './style.css'


const app = createApp(App)
app.use(router)
/*app.use(ui)*/
app.mount('#app')
