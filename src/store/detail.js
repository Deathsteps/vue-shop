import { fetchProductDetail, addProduct2Cart } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    detail: {},
    err: null,
    buyCount: 0
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
    },
    add2Cart ({ commit, state }) {
      commit('DETAIL_CART_ADD_REQUEST', { adding: true })
      addProduct2Cart({}, (err, data) => {
        if (err) {
          commit('DETAIL_CART_ADD_FAILURE', {
            adding: false,
            err
          })
        } else {
          commit('DETAIL_CART_ADD_SUCCESS', {
            adding: false,
            ...data,
            err: null
          })
        }
      })
    }
  },
  mutations: {
    ...buildMutations4Action('DETAIL_CART_ADD'),
    ...buildMutations4Action('PRODUCT_DETAIL')
  }
}
