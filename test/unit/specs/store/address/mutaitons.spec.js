import address from 'src/store/address'

describe('mutations for the address store', () => {
  window.ADDRESS_DATA = {
    'province1': {
      'city1': [
        'area1',
        'area3'
      ],
      'city2': [
        'area5',
        'area7'
      ]
    },
    'province2': {
      'city3': [
        'area2',
        'area4'
      ],
      'city4': [
        'area6',
        'area8'
      ]
    }
  }
  // states
  let state
  beforeEach(() => {
    // initialize state
    state = {
      dialogMode: '', // add or edit
      dialogDisplayed: false,
      locationList: null,
      locationIndex: 0,

      province: '',
      city: '',
      area: '',

      newAddress: {
        name: '',
        phone: '',
        identity: '',
        province: '',
        city: '',
        area: '',
        detail: ''
      }
    }
  })

  it('openLocationDialog', () => {
    const { openLocationDialog } = address.mutations
    // apply mutation
    openLocationDialog(state, 'add')
    // assert result
    expect(state.dialogMode).to.equal('add')
    expect(state.dialogDisplayed).to.be.true
    expect(state.locationIndex).to.equal(0)
    let provinces = ['province1', 'province2']
    provinces.forEach((item, i) => {
      expect(state.locationList[i]).to.equal(item)
    })
  })

  it('selectLocation', () => {
    const { openLocationDialog, selectLocation } = address.mutations

    openLocationDialog(state, 'add')

    selectLocation(state, { location: 'province2', locationIndex: state.locationIndex })
    expect(state.province).to.equal('province2')
    let cities = ['city3', 'city4']
    cities.forEach((item, i) => {
      expect(state.locationList[i]).to.equal(item)
    })
    expect(state.locationIndex).to.equal(1)

    selectLocation(state, { location: 'city4', locationIndex: state.locationIndex })
    expect(state.city).to.equal('city4')
    let areas = ['area6', 'area8']
    areas.forEach((item, i) => {
      expect(state.locationList[i]).to.equal(item)
    })
    expect(state.locationIndex).to.equal(2)

    selectLocation(state, { location: 'area8', locationIndex: state.locationIndex })
    expect(state.locationList).to.be.null
    expect(state.dialogDisplayed).to.be.false
    expect(state.locationIndex).to.equal(0)
    expect(state.province).to.equal('')
    expect(state.city).to.equal('')
    expect(state.area).to.equal('')
    expect(state.newAddress.province).to.equal('province2')
    expect(state.newAddress.city).to.equal('city4')
    expect(state.newAddress.area).to.equal('area8')
  })

  it('locationBack', () => {
    const { openLocationDialog, selectLocation, locationBack } = address.mutations

    openLocationDialog(state, 'add')
    selectLocation(state, { location: 'province2', locationIndex: state.locationIndex })
    selectLocation(state, { location: 'city4', locationIndex: state.locationIndex })

    locationBack(state)
    expect(state.locationIndex).to.equal(1)
    let cities = ['city3', 'city4']
    cities.forEach((item, i) => {
      expect(state.locationList[i]).to.equal(item)
    })

    locationBack(state)
    expect(state.locationIndex).to.equal(0)
    let provinces = ['province1', 'province2']
    provinces.forEach((item, i) => {
      expect(state.locationList[i]).to.equal(item)
    })

    locationBack(state)
    expect(state.locationIndex).to.equal(0)
    expect(state.dialogDisplayed).to.be.false
    expect(state.locationList).to.be.null
  })
})
