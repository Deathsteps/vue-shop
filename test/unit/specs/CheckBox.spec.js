import Vue from 'vue'
import Checkbox from 'src/components/commons/Checkbox'

describe('Checkbox.vue', () => {
  it('should render correct checkbox', done => {
    const vm = new Vue({
      template: '<checkbox :checked="checked"/>',
      components: { Checkbox },
      data: { checked: false }
    })

    vm.$mount()
    Vue.nextTick(() => {
      expect(vm.$el.classList.contains('checkbox')).to.be.true

      let input = vm.$el.querySelector('input')
      expect(input).to.be.ok

      expect(input.checked).to.be.false
      vm.checked = true
      Vue.nextTick(() => {
        expect(input.checked).to.be.true
        done()
      })
    })
  })

  it('change event should carry the right parameter', done => {
    let result

    const vm = new Vue({
      template: `
        <checkbox
          :checked="checked"
          :value="value"
          @change="handleChange"
        />'
      `,
      components: { Checkbox },
      data: {
        checked: false,
        value: { test: 1 }
      },
      methods: {
        handleChange (parameter) {
          result = parameter
        }
      }
    })

    vm.$mount()
    Vue.nextTick(() => {
      let input = vm.$el.querySelector('input')
      input.click()

      Vue.nextTick(() => {
        expect(result).to.be.ok
        expect(result.test).to.equal(1)
        expect(result.checked).to.be.true
        done()
      })
    })
  })
})
