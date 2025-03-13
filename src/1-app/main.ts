import { registerPlugins } from '@/1-app/providers'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')