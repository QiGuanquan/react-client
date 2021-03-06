/*
能发送异步ajax请求的函数模块
封装axios库
函数的返回值是promise对象
1.优化：统一处理请求异常
  在外层包一个自己创建的promise对象
  在请求出错时不去reject，而是显示错误提示
*/
import axios from 'axios'
import {message} from 'antd'

import storageUtils from '../utils/storageUtils'

const token = storageUtils.getToken()
export default function ajax(url, data={}, type='GET' ) {

  return new Promise((resolve, reject) => {
    let promise
    if(type === 'GET') { // 发送GET请求
      promise = axios.get(url, { // 配置对象
        headers: {'token': token},
        params: data // 指定请求参数
      })
    } else { // 发送POST请求
      promise = axios.post(url, data)
    }
    promise.then(response => {
      resolve(response)
    }).catch(error => {
      message.error('请求出错了:' + error.message)
    })
  })
}
