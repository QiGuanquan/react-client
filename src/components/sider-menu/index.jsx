import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import { Avatar, Menu } from 'antd'
import { UserOutlined, 
         AppstoreOutlined,
         PieChartOutlined,
         DesktopOutlined,
         ContainerOutlined,
         MailOutlined
        } from '@ant-design/icons';
/**
 * 左侧导航栏组件
 */

// const { SubMenu } = Menu

export default class SiderMenu extends Component {
  render(){
    return(
      <div>
        <div to='/' className="sider-menu">
          <Link className="sider-menu-header">
            <Avatar size={ 50 } icon={ <UserOutlined /> }></Avatar>
            <h1>admin</h1>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          // inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to='/workplace'>
              工作台
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/talk'>
              消息
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            <Link to='/memberlist'>
              通讯录
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            <Link to='/task'>
              任务
            </Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<AppstoreOutlined />}>
            <Link to='/search'>
              搜索
            </Link>
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<MailOutlined />} title="任务">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    )
  }
}