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
import memoryUtils from '../../utils/memoryUtils'

const { Footer, Sider, Content } = Layout
/*
  主页的路由组件
*/
export default class Admin extends Component {
    render() {
      const user = memoryUtils.user
      // 如果内存中没有存储user ==》 当前没有登录
      if(!user || !user.username) {
        // 自动跳转到登录（在render（）中）
        return <Redirect to='/login'/>
      }
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
            <Footer style={{ height: '24px', textAlign: 'center', color: '#ccc', padding: '2px 0px' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
          </Layout>
        </Layout>
      )
    }
}