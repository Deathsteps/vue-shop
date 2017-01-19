function date (value) {
  if (!value || isNaN(+value)) return ''
  let date = new Date(+value)
  let pad = function (num) {
    return (num < 10 ? '0' : '') + num
  }
  return date.getUTCFullYear() +
    '.' + pad(date.getUTCMonth() + 1) +
    '.' + pad(date.getUTCDate())
}

function orderStatusText (value) {
  if (!value || isNaN(+value)) return ''
  return ['', '待支付', '待处理', '待发货', '运输中', '已完成', '已取消', '已关闭'][+value]
}

export default { date, orderStatusText }
