import React, { Component } from 'react'
import './index.less'
/**
 * 右边头部组件
 */
export default class Header extends Component {

  miniMize() {
    console.log('mini')
  }
  maxMize() {
    console.log('max')
  }
  close() {
    console.log('close')
  }

  render(){
    return(
      <div className='header'>
        <div className="header-bar">
          <div className='mini-btn button' onClick={ this.miniMize }></div>
          <div className='max-btn button' onClick={ this.maxMize }></div>
          <div className='close-btn button' onClick={ this.close }></div>
        </div>
      </div>
    )
  }
}