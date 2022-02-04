import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Axios from "axios";
import { store } from "./store";
import vuetify from "./plugins/vuetify";

import Footer from "./components/Footer.vue";

Axios.defaults.withCredentials = false;
Axios.defaults.baseURL = "http://localhost:4000";

// Axios.interceptors.response.use(undefined, (err) => {
//   if (err) {
//     const originalRequest = err.config;
//     if (err.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch("Logout");
//       return router.push("/login");
//     }
//   }
// });

Vue.prototype.$http = Axios;

// Auto authentication
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] =
    "Bearer " + token;
}

Vue.component("app-footer", Footer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  created() {
    this.$store.dispatch("loadHotels");
  },
}).$mount("#app");
