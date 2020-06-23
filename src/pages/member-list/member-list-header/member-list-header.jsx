import React, { Component } from 'react'
import './member-list-header.less'


/**
 * 通讯录头部
 */
export default class MemberListHeader extends Component {

  render(){
    return(
      <div className='member-list-header'>
        <h1>我的群组</h1>
      </div>
    )
  }
}