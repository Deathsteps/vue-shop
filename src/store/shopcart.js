import { fetchUserShopcart } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    fetching: false,
    shopcart: null,
    err: null
  },
  actions: {
    fetchUserShopcart ({ commit, state }) {
      commit('SHOPCART_REQUEST', { fetching: true })
      fetchUserShopcart({}, (err, data) => {
        if (err) {
          commit('SHOPCART_FAILURE', {
            fetching: false,
            err
          })
        } else {
          commit('SHOPCART_SUCCESS', {
            fetching: false,
            shopcart: data.map((item) => {
              // uncheck products in shop
              item.checked = false
              item.products.forEach((product) => {
                product.checked = false
              })
              return item
            }),
            err: null
          })
        }
      })
    }
  },
  mutations: {
    // 实际应用时应该是shopId和productId做为参数，这里简化了下模型
    checkProduct4Cart (state, { checked, shopIndex, productIndex }) {
      let shop = state.shopcart[shopIndex]
      let product = shop.products[productIndex]
      product.checked = checked
      shop.checked = shop.products.every((p) => {
        return p.checked
      })
      shop.selectCount = shop.products.reduce((acc, cur) => {
        return acc + (cur.checked ? 1 : 0)
      }, 0)
    },
    checkShopProducts4Cart (state, { checked, shopIndex }) {
      let shop = state.shopcart[shopIndex]
      shop.checked = checked
      shop.products.forEach((p) => {
        p.checked = shop.checked
      })
      shop.selectCount = shop.checked ? shop.products.length : 0
    },
    decreaseProductAmount (state, { shopIndex, productIndex }) {
      let shop = state.shopcart[shopIndex]
      let product = shop.products[productIndex]
      if (product.buyCount === 1) { // 1 is an assumed min-amount of product purchase quantity
        return
      }
      product.buyCount --
    },
    increaseProductAmount (state, { shopIndex, productIndex }) {
      let shop = state.shopcart[shopIndex]
      let product = shop.products[productIndex]
      if (product.buyCount >= 99) { // 99 is an assumed max-amount of product purchase quantity
        return
      }
      product.buyCount ++
    },
    ...buildMutations4Action('SHOPCART')
  }
}
