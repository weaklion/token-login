import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./style/_global.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created () {
    //init token validation
    const userString = localStorage.getItem('user');
    if(userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData);
    }
    // fake token validation
    axios.interceptors.response.use(
      response => response,
      error => {
        if(error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount("#app");
