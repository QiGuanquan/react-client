import React, { Component } from 'react'
import './member-list-content.less'
import { Layout } from 'antd'
import MemberListContentSider from './member-list-content-sider/member-list-content-sider'
import GroupList from './group-list/group-list'

const { Sider, Content } = Layout
/**
 * 通讯录
 */
export default class MemberListContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: 1
    }
  }

  callback = (type) => {
    this.setState({type})
  }

  render(){
    console.log('qwe', this.state.type)
    return(
      <div className='member-list-content'>
        <Layout className='member-list-content-layout'>
          <Sider>
            <MemberListContentSider callback={this.callback}/>
          </Sider>
          <Layout>
            <Content>
              <GroupList type={this.state.type}/>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}