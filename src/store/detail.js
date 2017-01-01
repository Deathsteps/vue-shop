import { fetchProductDetail } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    detail: {},
    err: null
  },
  actions: {
    fetchProductDetail ({ commit, state }) {
      commit('PRODUCT_DETAIL_REQUEST', { fetching: true })
      fetchProductDetail({}, (err, data) => {
        if (err) {
          commit('PRODUCT_DETAIL_FAILURE', {
            fetching: false,
            err
          })
        } else {
          commit('PRODUCT_DETAIL_SUCCESS', {
            fetching: false,
            detail: data,
            err: null
          })
        }
      })
    }
  },
  mutations: buildMutations4Action('PRODUCT_DETAIL')
}
