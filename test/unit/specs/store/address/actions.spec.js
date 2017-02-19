const addressInjector = require('inject!src/store/address')

const testAddresses = [{
  id: 1,
  name: 'Test',
  phone: '17011824512',
  province: '北京市',
  city: '北京市',
  area: '海滨区',
  detail: '天和路32号'
}]
// create the module with our mocks
const address = addressInjector({
  './api': {
    fetchUserAddresses (params, callback) {
      setTimeout(() => {
        callback(null, testAddresses)
      }, 200)
    },
    addAddress (params, callback) {
      setTimeout(() => {
        callback(null, {})
      }, 200)
    },
    editAddress (params, callback) {
      setTimeout(() => {
        callback(null, {})
      }, 200)
    }

  }
}).default // fix the unexpected default created by babel when the module uses export default statement

/**
 * mock commit with expected mutations
 * @param  {Array} expectedMutations  the sorted expected mutations
 * @param  {Function} done  test over function
 * @return {Function}                   the commit function
 */
const buildCommit = (expectedMutations, done) => {
  return function (type, playload) {
    let mutation = expectedMutations.shift()
    expect(type).to.be.equal(mutation.type)
    expect(playload).to.be.deep.equal(mutation.playload)
    if (!expectedMutations.length) {
      done()
    }
  }
}

describe('actions for the address store', () => {
  it('fetchUserAddresses', done => {
    const { fetchUserAddresses } = address.actions
    let state = {}
    let commit = buildCommit([
      { type: 'USER_ADDRESS_REQUEST', playload: { fetching: true } },
      { type: 'USER_ADDRESS_SUCCESS', playload: { fetching: false, addresses: testAddresses, err: null } }
    ], done)
    fetchUserAddresses({ commit, state })
  })

  it('addAddress', done => {
    const { addAddress } = address.actions
    let state = {}
    let commit = buildCommit([
      { type: 'USER_ADDRESS_ADD_REQUEST', playload: { adding: true } },
      { type: 'USER_ADDRESS_ADD_SUCCESS', playload: { adding: false, addSuccess: true, err: null } }
    ], done)
    addAddress({ commit, state })
  })

  it('editAddress', done => {
    const { editAddress } = address.actions
    let state = {}
    let commit = buildCommit([
      { type: 'USER_ADDRESS_EDIT_REQUEST', playload: { editing: true } },
      { type: 'USER_ADDRESS_EDIT_SUCCESS', playload: { editing: false, editSuccess: true, err: null } }
    ], done)
    editAddress({ commit, state })
  })
})
