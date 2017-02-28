// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
const app = new Vue({
  // el: '#app',
  template: '<app />',
  components: { App },
  store,
  router
})

export { app, router, store }
