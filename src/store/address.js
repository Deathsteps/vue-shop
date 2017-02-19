import { fetchUserAddresses, addAddress, editAddress } from './api'
import { buildMutations4Action } from './helpers'

export default {
  state: {
    // list
    fetching: false,
    addresses: [],
    deleteConfrimDisplayed: false,
    removeAddressId: -1,
    deleteSuccess: false,
    // add
    adding: false,
    newAddress: {
      name: '',
      phone: '',
      identity: '',
      province: '',
      city: '',
      area: '',
      detail: ''
    },
    addSuccess: false,
    // edit
    editing: false,
    editedAddress: {
      name: '',
      phone: '',
      identity: '',
      province: '',
      city: '',
      area: '',
      detail: ''
    },
    editSuccess: false,
    // location dialog
    dialogMode: '', // add or edit
    dialogDisplayed: false,
    locationList: null,
    locationIndex: 0,
    province: '',
    city: '',
    area: '',
    err: null
  },
  getters: {
    locationTitle (state) {
      return ['省', '市', '区'][state.locationIndex]
    },
    locationInfo (state) {
      return ['地址', state.province, state.city][state.locationIndex]
    }
  },
  actions: {
    fetchUserAddresses ({ commit, state }) {
      commit('USER_ADDRESS_REQUEST', { fetching: true })
      fetchUserAddresses({}, (err, data) => {
        if (err) {
          commit('USER_ADDRESS_FAILURE', {
            fetching: false,
            err
          })
        } else {
          commit('USER_ADDRESS_SUCCESS', {
            fetching: false,
            addresses: data,
            err: null
          })
        }
      })
    },
    addAddress ({ commit, state }, params) {
      commit('USER_ADDRESS_ADD_REQUEST', { adding: true })
      addAddress(params, (err, data) => {
        if (err) {
          commit('USER_ADDRESS_ADD_FAILURE', {
            adding: false,
            err
          })
        } else {
          commit('USER_ADDRESS_ADD_SUCCESS', {
            adding: false,
            addSuccess: true,
            err: null
          })
        }
      })
    },
    editAddress ({ commit, state }, params) {
      commit('USER_ADDRESS_EDIT_REQUEST', { editing: true })
      editAddress(params, (err, data) => {
        if (err) {
          commit('USER_ADDRESS_EDIT_FAILURE', {
            editing: false,
            err
          })
        } else {
          commit('USER_ADDRESS_EDIT_SUCCESS', {
            editing: false,
            editSuccess: true,
            err: null
          })
        }
      })
    },
    removeAddress ({ commit, state }, params) {
      commit('USER_ADDRESS_DELETE_SUCCESS', { deleteSuccess: true })
    }
  },
  mutations: {
    openLocationDialog (state, dialogMode) {
      state.dialogMode = dialogMode
      state.dialogDisplayed = true
      state.locationList = Object.keys(window.ADDRESS_DATA)
      state.locationIndex = 0
    },
    selectLocation (state, {location, locationIndex}) {
      const fields = ['province', 'city', 'area']
      state[fields[locationIndex]] = location
      if (locationIndex === 2) {
        // set target fields
        let target = state.dialogMode === 'add' ? 'newAddress' : 'editedAddress'
        state[target].province = state.province
        state[target].city = state.city
        state[target].area = state.area
        // reset fields
        state.dialogDisplayed = false
        state.locationList = null
        state.locationIndex = 0
        state.province = ''
        state.city = ''
        state.area = ''
      } else {
        state.locationList =
          locationIndex === 0
            ? Object.keys(window.ADDRESS_DATA[state.province])
            : window.ADDRESS_DATA[state.province][state.city]
        state.locationIndex = locationIndex + 1
      }
    },
    locationBack (state) {
      if (state.locationIndex === 0) {
        state.dialogDisplayed = false
        state.locationList = null
      } else {
        state.locationList =
          state.locationIndex === 1
            ? Object.keys(window.ADDRESS_DATA)
            : Object.keys(window.ADDRESS_DATA[state.province])
        state.locationIndex--
      }
    },
    setEditedAddress (state, address) {
      state.editedAddress = address
    },
    openDeleteConfirm (state, removeAddressId) {
      state.deleteConfrimDisplayed = true
      state.removeAddressId = removeAddressId
    },
    closeDeleteConfirm (state) {
      state.deleteConfrimDisplayed = false
    },
    ...buildMutations4Action('USER_ADDRESS'),
    ...buildMutations4Action('USER_ADDRESS_ADD'),
    ...buildMutations4Action('USER_ADDRESS_EDIT'),
    ...buildMutations4Action('USER_ADDRESS_DELETE')
  }
}
