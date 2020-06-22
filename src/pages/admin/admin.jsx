import React, {Component} from 'react'
import { Layout } from 'antd'
import { Redirect, Route, Switch } from 'react-router-dom'
import SiderMenu from '../../components/sider-menu' 
import Header from '../../components/header'
import MemberList from '../member-list/member-list'
import Search from '../search/search'
import Talk from '../talk/talk'
import Task from '../task/task'
import WorkPlace from '../work-place/work-place'

const { Footer, Sider, Content } = Layout
/*
  主页的路由组件
*/
export default class Admin extends Component {
    render() {
      return (
        <Layout style={{ height: '100%' }}>
          <Sider>
            <SiderMenu/>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content style={{ backgroundColor: '#fff' }}>
              <Switch>
                <Route path='/workplace' component={ WorkPlace }></Route>
                <Route path='/talk' component={ Talk }></Route>
                <Route path='/memberlist' component={ MemberList }></Route>
                <Route path='/task' component={ Task }></Route>
                <Route path='/search' component={ Search }></Route>
                <Redirect to='/workplace' />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center', color: '#ccc' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
          </Layout>
        </Layout>
      )
    }
}