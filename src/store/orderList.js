import { fetchUserOrders } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    orderList: null,
    err: null
  },
  actions: {
    fetchUserOrders ({ commit, state }) {
      commit('ORDER_LIST_REQUEST', { fetching: true })
      fetchUserOrders({}, (err, data) => {
        if (err) {
          commit('ORDER_LIST_FAILURE', {
            fetching: false,
            err
          })
        } else {
          commit('ORDER_LIST_SUCCESS', {
            fetching: false,
            orderList: data,
            err: null
          })
        }
      })
    }
  },
  mutations: buildMutations4Action('ORDER_LIST')
}
