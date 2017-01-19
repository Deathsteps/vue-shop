// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Detail from './components/Detail'
import Address from './components/Address'
import Login from './components/Login'
import OrderList from './components/OrderList'
import OrderDetail from './components/OrderDetail'

import storeModules from './store/index'
import storage from './store/storage'

import filters from './filters'

Object.keys(filters).forEach(function (filterName) {
  Vue.filter(filterName, filters[filterName])
})

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
  { path: '/login', component: Login },
  { path: '/address/:mode', component: Address, meta: { requiresAuth: true } },
  { path: '/orders', component: OrderList, meta: { requiresAuth: true } },
  { path: '/order', component: OrderDetail, meta: { requiresAuth: true } },
  { path: '*', component: NotFound }
]
const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  // handle auth
  if (to.meta && to.meta.requiresAuth && !storage.get('user')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: new Vuex.Store({ modules: storeModules }),
  router
})
