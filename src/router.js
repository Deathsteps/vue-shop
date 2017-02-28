import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from './components/NotFound'
import Home from './components/Home'
import Detail from './components/Detail'
import Address from './components/Address'
import Login from './components/Login'
import OrderList from './components/OrderList'
import OrderDetail from './components/OrderDetail'
import Shopcart from './components/Shopcart'

import storage from './store/storage'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/detail', component: Detail },
  { path: '/login', component: Login },
  { path: '/address/:mode', component: Address, meta: { requiresAuth: true } },
  { path: '/orders', component: OrderList, meta: { requiresAuth: true } },
  { path: '/order', component: OrderDetail, meta: { requiresAuth: true } },
  { path: '/shopcart', component: Shopcart, meta: { requiresAuth: true } },
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

export default router
