import React, { Component } from 'react'
import './member-list-side.less'
import { Menu, Input } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined
} from '@ant-design/icons';

const { Search } = Input;

/**
 * 通讯录左边导航栏
 */
export default class MemberListSide extends Component {



  render(){
    return(
      <div className='member-list-side'>
        <div className='member-list-side-search'>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 180 }}
          />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            我的群组
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            企业联系人
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            我的团队
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}