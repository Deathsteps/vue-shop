import address from 'src/store/address'

describe('getters for the address store', () => {
  it('locationTitle', () => {
    const { locationTitle } = address.getters

    let state = { locationIndex: 0 }
    expect(locationTitle(state)).to.equal('省')
    state.locationIndex = 1
    expect(locationTitle(state)).to.equal('市')
    state.locationIndex = 2
    expect(locationTitle(state)).to.equal('区')
  })

  it('locationInfo', () => {
    const { locationInfo } = address.getters

    let state = { locationIndex: 0, province: '浙江省', city: '杭州市' }
    expect(locationInfo(state)).to.equal('地址')
    state.locationIndex = 1
    expect(locationInfo(state)).to.equal('浙江省')
    state.locationIndex = 2
    expect(locationInfo(state)).to.equal('杭州市')
  })
})
