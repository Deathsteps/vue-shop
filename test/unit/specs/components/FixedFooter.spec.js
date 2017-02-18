import Vue from 'vue'
import FixedFooter from 'src/components/commons/FixedFooter'

describe('FixedFooter.vue', () => {
  it('render a correct fixed footer', done => {
    const vm = new Vue({
      template: '<fixed-footer></fixed-footer>',
      components: { FixedFooter }
    })
    vm.$mount()

    Vue.nextTick(() => {
      expect(vm.$el.tagName).to.equal('FOOTER')
      expect(vm.$el.querySelector('.fixed-footer')).to.exist
      done()
    })
  })

  it('render children nodes correctly', done => {
    const vm = new Vue({
      template: `
        <fixed-footer>
          <p>footer</p>
        </fixed-footer>
      `,
      components: { FixedFooter }
    })
    vm.$mount()

    Vue.nextTick(() => {
      let p = vm.$el.querySelector('.fixed-footer>p')
      expect(p).to.exist
      expect(p.textContent).to.equal('footer')
      done()
    })
  })

  it('render the back button and call the back-function correctly', done => {
    let isBackHandled = false
    const vm = new Vue({
      template: `
        <fixed-footer
          :back="true"
          :backFunction="handleBack">
        </fixed-footer>
      `,
      components: { FixedFooter },
      methods: {
        handleBack () {
          isBackHandled = true
        }
      }
    })
    vm.$mount()

    Vue.nextTick(() => {
      let btnBack = vm.$el.querySelector('.fixed-footer>.footer-back')
      expect(btnBack).to.exist

      btnBack.click()
      Vue.nextTick(() => {
        expect(isBackHandled).to.be.true
        done()
      })
    })
  })
})
