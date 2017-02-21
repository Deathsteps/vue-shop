exports.assertion = function (selector, attrName, expectedAttrs) {
  this.message =
    'Each attribute ( ' + attrName + ' ) of elements ( ' + selector + ' ) is correct'
  this.expected = expectedAttrs
  this.pass = function (attrs) {
    return attrs.every((attr, i) => {
      return attr === expectedAttrs[i]
    })
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector, attrName) {
      let elements = document.querySelectorAll(selector)
      return Array.prototype.map.call(
        elements,
        function (el) {
          return el.getAttribute(attrName)
        }
      )
    }, [selector, attrName], function (res) {
      cb.call(self, res)
    })
  }
}
