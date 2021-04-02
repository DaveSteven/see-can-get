import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router/index'
import Drag from './utils/dragging'
import '@/assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Drag)

app.mount('#app')
