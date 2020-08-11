import { request } from '@/services/request'
// import queryString from 'querystring'

export function apiLogin (param) {
  return request({
    url: '/api/login/login',
    method: 'post',
    data: param,
    isNeedLogin: true
  })
    .then(res => res.data)
    .catch((e) => {})
}
export function apiList (parameter) {
  return request({
    url: '/repair-asset/purchase/goodOrderPage',
    method: 'get',
    params: parameter,
    isNeedLogin: true
  })
    .then(res => res.data)
    .catch((e) => {})
}
