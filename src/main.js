import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import Axios from 'axios'
import { store } from './store'
import vuetify from './plugins/vuetify'

import Footer from './components/Footer.vue'
import Alert from './components/shared/alert.vue'

Axios.defaults.withCredentials = false
Axios.defaults.baseURL = 'http://localhost:4000'

Vue.prototype.$http = Axios

const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] ='Bearer ' + token
}

// Axios.interceptors.response.use(undefined, function(err) {
//   if(err) {
//     const originalRequest = err.config
//     if(err.response.status = 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       store.dispatch('logout')
//       return router.push('/login')
//     }
//   }
// })

Vue.component('app-footer', Footer)
Vue.component('app-alert', Alert)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
