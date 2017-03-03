import { fetchHomeProducts } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    products: null,
    err: null,

    display: 'home',
    homeTabs: [
      {icon: '&#xe612;', text: '品牌'},
      {icon: '&#xe60b;', text: '分类'},
      {icon: '&#xe60a;', text: '发现'}
    ],
    footerTabs: [
      {icon: '&#xe619;', text: '首页', name: 'home'},
      {icon: '&#xe620;', text: '我的', name: 'user'}
    ],
    userCenterTabs: [
      {icon: '&#xe607;', text: '待支付'},
      {icon: '&#xe606;', text: '待收货'},
      {icon: '&#xe626;', text: '已完成'}
    ]
  },
  actions: {
    fetchHomeProducts ({ commit, state }) {
      // refactor the code with a Promise for the server rendering
      return new Promise((resolve, reject) => {
        commit('HOME_PRODUCT_REQUEST', { fetching: true })
        fetchHomeProducts({}, (err, data) => {
          if (err) {
            commit('HOME_PRODUCT_FAILURE', {
              fetching: false,
              err
            })
            reject(err)
          } else {
            commit('HOME_PRODUCT_SUCCESS', {
              fetching: false,
              ...data,
              err: null
            })
            resolve()
          }
        })
      })
    }
  },
  mutations: {
    switchDisplay (state, playload) {
      state.display = playload.name
    },
    ...buildMutations4Action('HOME_PRODUCT')
  }
}
