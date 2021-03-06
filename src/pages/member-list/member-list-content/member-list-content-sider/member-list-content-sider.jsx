import React, { Component } from 'react'
import './member-list-content-sider.less'
/**
 * 通讯录
 */
const classNames = require('classnames');
export default class MemberListContentSider extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedJoin: true,
      selectedCreated: false,
      type: 1
    }
  }

  clickJoin = e => {
    this.setState({
      selectedJoin: true,
      selectedCreated: false
    })
    this.setState({type: 1}, () => this.props.callback(this.state.type))
  }

  clickCreated = e => {
    this.setState({
      selectedJoin: false,
      selectedCreated: true
    })
    this.setState({type: 2}, () => this.props.callback(this.state.type))
  }

  render(){
    return(
      <div className='member-list-content-sider'>
        <div className={classNames('item-first', [this.state.selectedJoin?'selected':''], 'item')} onClick={this.clickJoin}>
          <h1>我加入的群组</h1>
          <div className='group'>
            <div className='gourp-svg'></div>群组
          </div>
        </div>
        <div className={classNames('item-end', [this.state.selectedCreated?'selected':'', 'item'])} onClick={this.clickCreated}>
          <h1>我创建的群组</h1>
          <div className='group'>
            <div className="gourp-svg"></div>群组
          </div>
        </div>
      </div>
    )
  }
}