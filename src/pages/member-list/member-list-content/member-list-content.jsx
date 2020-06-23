import React, { Component } from 'react'
import './member-list-content.less'
import { Layout } from 'antd'
import MemberListContentSider from './member-list-content-sider/member-list-content-sider'

const { Sider, Content } = Layout
/**
 * 通讯录
 */
export default class MemberListContent extends Component {
  render(){
    return(
      <div className='member-list-content'>
        <Layout className='member-list-content-layout'>
          <Sider>
            <MemberListContentSider/>
          </Sider>
          <Layout>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}