// 封装了axios的请求方法，完善请求前后拦截以及加载动画
// router用于路由跳转
// common.js中存放着各种公共方法，和request.js同级目录
// 加载动画Toast使用的是有赞的ui框架vant

import axios from 'axios'
import router from './../router'
import * as config from './../config'
import queryString from 'querystring'
import { Toast } from 'vant'
// import { getToken } from './common.js'
const request = axios.create({
  baseURL: config.default, // 获取基础公共路径,
  header: 'Content-Security-Policy: upgrade-insecure-requests',
  timeout: 10000 // 允许超时时限设置10s
})

// 添加请求拦截器,在请求前做相关操作
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 此处对数据或接口进行处理判定

  // 接口请求判断拦截，如果需要登录信息，添加登录信息
  // config.isNeedLogin && (config.data.token = getToken())

  // 接口请求统一拦截，如果所有接口都需要该参数，统一添加
  // config.data.from = 'BIYOU'
  // config.data.examId = '20190007'
  const token = window.localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = token
  }
  if (config.method === 'post' ||
      config.method === 'put' ||
      config.method === 'delete' ||
      config.method === 'patch'
  ) {
    config.data = queryString.stringify(config.data)
  } else {
    if (!config.data) {
      config.data = ''
    }
  }

  // 加载动画
  Toast.loading({
    duration: 0,
    mask: false,
    forbidClick: true,
    message: '加载中...'
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器，对获取到的响应统一处理
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 关闭加载动画
  Toast.clear()

  // 此处对返回状态进行判定，可以处理登陆过期等各种状态。
  if (response.data.code === '0000') {
    return Promise.resolve(response.data.appdata)
  } else if (response.data.code === '3202') {
    // 假定3202错误码，需重新登录
    return router.replace('/login')
  } else {
    return Promise.resolve(response)
  }
}, function (error) {
  // 对响应错误做点什么
  Toast.clear()

  const errStr = error.toString()
  if (errStr.search('timeout') !== -1) {
    error = '请求超时'
  } else if (errStr.toLocaleLowerCase().indexOf('network error') !== -1) {
    error = '网络错误'
  }
  return Promise.reject(error)
})

export {
  request
}
