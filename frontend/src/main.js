/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import store from './store'
import axios from 'axios'
import vuetify from './config/vuetify'

const app = createApp(App)

registerPlugins(app)
app.use(store)
app.use(vuetify)

axios.defaults.baseURL = 'http://127.0.0.1:3001'

app.config.globalProperties.$axios = axios
app.mount('#app')
