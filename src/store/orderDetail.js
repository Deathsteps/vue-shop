import { fetchOrderDetail } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    order: {},
    err: null
  },
  actions: {
    fetchOrderDetail ({ commit, state }) {
      commit('ORDER_DETAIL_REQUEST', { fetching: true })
      fetchOrderDetail({}, (err, data) => {
        if (err) {
          commit('ORDER_DETAIL_FAILURE', {
            fetching: false,
            err
          })
        } else {
          commit('ORDER_DETAIL_SUCCESS', {
            fetching: false,
            order: data,
            err: null
          })
        }
      })
    }
  },
  mutations: buildMutations4Action('ORDER_DETAIL')
}
