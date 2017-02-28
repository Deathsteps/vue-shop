const mockDataService = require('../../build/mockDataService')

const NOT_SUPPORT_ERROR = new Error('This function is not support on server side')

export const upload = (url, params, callback, onProgress) => {
  throw NOT_SUPPORT_ERROR
}

export const request = (url, params, callback) => {
  throw NOT_SUPPORT_ERROR
}

export function fetchHomeProducts (params, callback) {
  callback(null, mockDataService.get('home'))
}

export function fetchProductDetail (params, callback) {
  callback(null, mockDataService.get('detail'))
}

export function userLogin (params, callback) {
  throw NOT_SUPPORT_ERROR
}

export function fetchUserAddresses (params, callback) {
  callback(null, mockDataService.get('address'))
}

export function addAddress (params, callback) {
  throw NOT_SUPPORT_ERROR
}

export function editAddress (params, callback) {
  throw NOT_SUPPORT_ERROR
}

export function fetchUserOrders (params, callback) {
  callback(null, mockDataService.get('orders'))
}

export function fetchOrderDetail (params, callback) {
  callback(null, mockDataService.get('order'))
}

export function addProduct2Cart (params, callback) {
  throw NOT_SUPPORT_ERROR
}

export function fetchUserShopcart (params, callback) {
  callback(null, mockDataService.get('shopcart'))
}

export const onServer = true
