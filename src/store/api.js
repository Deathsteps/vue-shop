
const ajax = (url, method, params, callback, onBeforeSend) => {
  let xhr = new window.XMLHttpRequest()
  xhr.open(method, url, true)
  // xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let body = xhr.responseText
      if (xhr.status >= 200 && xhr.status < 300 ||
        xhr.status === 304) {
        let data
        try {
          data = JSON.parse(body)
        } catch (ex) {
          callback(ex)
        }
        if (data) {
          callback(null, data)
        }
      } else {
        callback(body)
      }
    }
  }

  let content = onBeforeSend(xhr)
  content = params ? JSON.stringify(params) : content

  try {
    xhr.send(content)
  } catch (e) {
    window.alert(e)
    throw new Error(e)
  }
}

const post = (url, params, callback) => {
  ajax(
    url, 'POST', params, callback,
    function (xhr) {
      xhr.setRequestHeader('Content-type', 'application/json')
    }
  )
}

export const upload = (url, params, callback, onProgress) => {
  ajax(
    url, 'POST', null, callback,
    function (xhr) {
      // listen to upload
      if (onProgress && xhr.upload) { // Progress
        xhr.upload.addEventListener('progress', function (event) {
          if (event.lengthComputable) {
            let percentComplete = (event.loaded / event.total).toFixed(2) * 100
            onProgress(percentComplete)
          }
        }, false)
      }
      // build form data
      let data = new window.FormData()
      for (let k in params) {
        data.append(k, params[k])
      }
      return data
    }
  )
}

export const request = (url, params, callback) => {
  // 测试环境  api地址是 http://139.196.211.52:8501/api/metadata
  post(
    'http://localhost:8080/data/' + url,
    params,
    function (err, data) {
      if (err) {
        callback(err)
      } else {
        if (!data) {
          callback(new Error('Something wrong happened!'))
        } else if (data.ResultStatus && data.ResultStatus.ResultCode !== 0) {
          let err = new Error(data.ResultStatus.ResultMess)
          err.code = data.ResultStatus.ResultCode
          callback(err)
        } else {
          callback(null, data)
        }
      }
    }
  )
}

export function fetchHomeProducts (params, callback) {
  request('home', params, callback)
}

export function fetchProductDetail (params, callback) {
  request('detail', params, callback)
}

export function userLogin (params, callback) {
  request('login', params, callback)
}

export function fetchUserAddresses (params, callback) {
  request('address', params, callback)
}

export function addAddress (params, callback) {
  params = { mode: 'add', ...params }
  request('address', params, callback)
}

export function editAddress (params, callback) {
  params = { mode: 'edit', ...params }
  request('address', params, callback)
}

export function fetchUserOrders (params, callback) {
  request('orders', params, callback)
}

export function fetchOrderDetail (params, callback) {
  request('order', params, callback)
}

export function addProduct2Cart (params, callback) {
  window.temp_cartCount = window.temp_cartCount || 0
  setTimeout(() => {
    callback(null, { buyCount: ++window.temp_cartCount })
  }, 200)
}

export function fetchUserShopcart (params, callback) {
  request('shopcart', params, callback)
}
