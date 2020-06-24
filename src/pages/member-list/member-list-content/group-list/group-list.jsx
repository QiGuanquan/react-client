import React, { Component } from 'react'
import './group-list.less'
import { List, Avatar } from 'antd';
/**
 * 通讯录
 */

const data = [
  {
    title: '群组1',
  },
  {
    title: '群组 2',
  },
  {
    title: '群组 3',
  },
  {
    title: '群组 4',
  }
]

export default class GroupList extends Component {
  render(){
    return(
      <div className='group-list'>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar style={{ backgroundColor: '#3078ff', verticalAlign: 'middle' }} size="large" >
                admin
              </Avatar>}
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}