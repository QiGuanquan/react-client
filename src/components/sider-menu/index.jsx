import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.less'
import { Avatar, Menu } from 'antd'
import { UserOutlined, 
         SearchOutlined,
         MessageOutlined,
         DesktopOutlined,
         TeamOutlined,
         ContainerOutlined,
         FileOutlined
        } from '@ant-design/icons';
import menuList from '../../config/menuConfig'
/**
 * 左侧导航栏组件
 */

const { SubMenu } = Menu
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

  creatReactNode = (item) => {
    switch(item.icon){
      case 'DesktopOutlined':
        return <DesktopOutlined />
      case 'MessageOutlined':
        return <MessageOutlined />
      case 'TeamOutlined':
        return <TeamOutlined />
      case 'ContainerOutlined':
        return <ContainerOutlined />
      case 'SearchOutlined': 
        return <SearchOutlined />
      default:
        return <FileOutlined />
    }
  }

  getMenuNodes = (menuList) => {
    return menuList.map(item => {
      if(!item.children) {
        return (
          <Menu.Item
            key={item.key}
            icon={this.creatReactNode(item)}
          >
            <Link to={item.key}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={<SearchOutlined />} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
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
          {this.getMenuNodes(menuList)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(SiderMenu)