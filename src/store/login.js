import { userLogin } from './api'
import { buildMutations4Action } from './helpers'
import storage from './storage'

export default {
  state: {
    logining: false,
    username: '',
    password: '',
    token: '',
    err: null
  },
  actions: {
    login ({ commit, state }, params) {
      commit('USER_LOGIN_REQUEST', { logining: true })
      userLogin(params, (err, data) => {
        if (err) {
          commit('USER_LOGIN_FAILURE', {
            logining: false,
            err
          })
        } else {
          // keep login status in localstorage
          let userInfo = { ...params, ...data }
          storage.set('user', userInfo)
          commit('USER_LOGIN_SUCCESS', {
            logining: false,
            ...userInfo,
            err: null
          })
        }
      })
    }
  },
  mutations: buildMutations4Action('USER_LOGIN')
}
