// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/Home'
import Detail from './components/Detail'

// Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/detail', component: Detail }
]
const router = new VueRouter({ routes })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
