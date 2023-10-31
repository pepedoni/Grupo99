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
import vuetify from './config/vuetify'
import axios from './config/axios'


const app = createApp(App)

registerPlugins(app)
app.use(store)
store.dispatch('login/checkToken')
app.use(vuetify)

app.config.globalProperties.$axios = axios
app.mount('#app')
