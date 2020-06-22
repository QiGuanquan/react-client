import React, { Component } from 'react'
import './index.less'
/**
 * 右边头部组件
 */
export default class Header extends Component {
  render(){
    return(
      <div className='header'>
        <div className="header-bar">
          <h1>
            欢迎admin,
          </h1>
          <a href="/self">
            退出
          </a>
        </div>
      </div>
    )
  }
}