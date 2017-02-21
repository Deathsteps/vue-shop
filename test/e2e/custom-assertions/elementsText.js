exports.assertion = function (selector, expectedTexts) {
  this.message =
    'Each text of elements ( ' + selector + ' ) is correct'
  this.expected = expectedTexts
  this.pass = function (texts) {
    return texts.every((text, i) => {
      return text === expectedTexts[i]
    })
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      let elements = document.querySelectorAll(selector)
      return Array.prototype.map.call(
        elements,
        function (el) {
          return el.textContent
        }
      )
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}
