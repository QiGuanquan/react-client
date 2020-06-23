import React, { Component } from 'react'
import './member-list.less'
import { Layout } from 'antd'
import MemberListSide from './member-list-side/member-list-side'
import MemberListHeader from './member-list-header/member-list-header'

const { Sider, Content, Header } = Layout
/**
 * 通讯录
 */
export default class MemberList extends Component {
  render(){
    return(
      <div className='member-list'>
        <Layout className='member-list-layout'>
          <Sider>
            <MemberListSide />
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: '#fff' }}>
              <MemberListHeader/>
            </Header>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}