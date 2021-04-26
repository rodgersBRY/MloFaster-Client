import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

// import components globally
import Login from './components/Login.vue'
import Register from './components/Register.vue'

// use the components in vue app
Vue.component('login-form', Login)
Vue.component('register-form', Register)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
