import Vue from 'vue'
import App from './App.vue'
import './plugins/bootstrap'
import router from './router'
import store from './store'
import "./assets/css/material.css"
import "animate.css"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')