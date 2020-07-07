import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router'
import router from './router'
import store from './store'
import 'lib-flexible'
import './lib/rem.js'

import './assets/style/index.css'

import FastClick from 'fastclick'

FastClick.attach(document.body)

Vue.config.productionTip = false

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
