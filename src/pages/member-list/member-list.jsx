import React, { Component } from 'react'
import './member-list.less'
import { Layout } from 'antd'
import MemberListSide from './member-list-side/member-list-side'
import MemberListHeader from './member-list-header/member-list-header'
import MemberListContent from './member-list-content/member-list-content'

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
            <Header style={{ backgroundColor: '#fff', borderBottom: '1px solid #dee0e3' }}>
              <MemberListHeader/>
            </Header>
            <Content>
              <MemberListContent/>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}