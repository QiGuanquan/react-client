import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.less'
import { Avatar, Menu } from 'antd'
import { UserOutlined, 
         SearchOutlined,
         MessageOutlined,
         DesktopOutlined,
         TeamOutlined,
         ContainerOutlined
        } from '@ant-design/icons';
/**
 * 左侧导航栏组件
 */

// const { SubMenu } = Menu

class SiderMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current: '/',
      top: 0
    }
  }

  componentDidMount() {
    if(this.props.location.pathname) {
        this.setState({
            current: this.props.location.pathname
        })
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    })
  }

  render(){
    return(
      <div>
        <div className="sider-menu">
          <Link to='/workplace' className="sider-menu-header">
            <Avatar size={ 50 } icon={ <UserOutlined /> }></Avatar>
            <h1>admin</h1>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={[this.state.current]}
          mode="inline"
          theme="dark"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
        >
          <Menu.Item key="/workplace" icon={<DesktopOutlined />}>
            <Link to='/workplace'>
              工作台
            </Link>
          </Menu.Item>
          <Menu.Item key="/talk" icon={<MessageOutlined />}>
            <Link to='/talk'>
              消息
            </Link>
          </Menu.Item>
          <Menu.Item key="/memberlist" icon={<TeamOutlined />}>
            <Link to='/memberlist'>
              通讯录
            </Link>
          </Menu.Item>
          <Menu.Item key="/task" icon={<ContainerOutlined />}>
            <Link to='/task'>
              任务
            </Link>
          </Menu.Item>
          <Menu.Item key="/search" icon={<SearchOutlined />}>
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

export default withRouter(SiderMenu)