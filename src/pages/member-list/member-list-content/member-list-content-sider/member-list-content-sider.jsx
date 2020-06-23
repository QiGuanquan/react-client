import React, { Component } from 'react'
import './member-list-content-sider.less'
/**
 * 通讯录
 */
export default class MemberListContentSider extends Component {
  render(){
    return(
      <div className='member-list-content-sider'>
        <div className='item-first item'>
          <h1>我加入的群组</h1>
          <div className='group'>
            <div className='gourp-svg'></div>群组
          </div>
        </div>
        <div className='item-end item'>
          <h1>我创建的群组</h1>
          <div className='group'>
            <div className="gourp-svg"></div>群组
          </div>
        </div>
      </div>
    )
  }
}