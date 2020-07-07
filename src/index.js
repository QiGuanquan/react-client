/*
  入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import 'antd/dist/antd.css'
import { provider } from 'react-redux'
import store from './redux/store'
// import storageUtils from './utils/storageUtils'
// import memoryUtils from './utils/memoryUtils'
// 读取local中保存的user, 保存到内存中
// const user = storageUtils.getUser()
// memoryUtils.user = user

// 将App组件标签渲染到index页面的div上
ReactDOM.render((
  <provider store={store}>
    <App/>
  </provider>
), document.getElementById('root'))