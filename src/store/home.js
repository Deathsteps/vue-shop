import { fetchHomeProducts } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    products: null,
    err: null
  },
  actions: {
    fetchHomeProducts ({ commit, state }) {
      commit('HOME_PRODUCT_REQUEST', { fetching: true })
      fetchHomeProducts({}, (err, data) => {
        if (err) {
          commit('HOME_PRODUCT_FAILURE', {
            fetching: false,
            err
          })
        } else {
          commit('HOME_PRODUCT_SUCCESS', {
            fetching: false,
            ...data,
            err: null
          })
        }
      })
    }
  },
  mutations: buildMutations4Action('HOME_PRODUCT')
}
