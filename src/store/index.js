import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import detail from './detail'
import login from './login'
import address from './address'
import orderList from './orderList'
import orderDetail from './orderDetail'
import shopcart from './shopcart'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    home,
    detail,
    login,
    address,
    orderList,
    orderDetail,
    shopcart
  }
})
