// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'home page': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    // browser
    //   .url(devServer)
    //   .waitForElementVisible('#app', 5000)
    //   .assert.elementPresent('.hello')
    //   .assert.containsText('h1', 'Welcome to Your Vue.js App')
    //   .assert.elementCount('img', 1)
    //   .end()

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
    // search bar
    browser.expect.element('.searcher>.searcher-input>input').to.be.present
    // tabs
    const expectedTabTexts = [
      '品牌', '分类', '发现', // Main Tabs
      '首页', '我的' // Footer Tabs
    ]
    browser.assert.elementsText('.tabs>.tab>div', expectedTabTexts)
    // list
    browser.waitForElementVisible('.product-list', 1000)
    const expectedProducts = [
      {
        title: 'App Product',
        price: 500,
        picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'
      },
      {
        title: 'App Product 1',
        price: 300,
        picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'
      },
      {
        title: 'App Product 2',
        price: 500,
        picUrl: 'http://www.aomaicdn.com/attas/2016/11/20161118100820_582e6294c02d8.jpg'
      },
      {
        title: 'App Product 3',
        price: 800,
        picUrl: 'http://www.aomaicdn.com/attas/2016/05/947_G_1463121881855.jpg'
      },
      {
        title: 'App Product 4',
        price: 100,
        picUrl: 'http://www.aomaicdn.com/attas/2016/10/20161008173242_57f8bd3ad325a.jpg'
      }
    ]
    browser.assert.elementsText(
      '.product-wrapper .product-title',
      expectedProducts.map(p => p.title)
    )
    browser.assert.elementsText(
      '.product-wrapper .product-price',
      expectedProducts.map(p => ('¥' + p.price))
    )
    browser.assert.elementsAttribute(
      '.product-wrapper .product-img img',
      'src',
      expectedProducts.map(p => p.picUrl)
    )

    browser.end()
  }
}
