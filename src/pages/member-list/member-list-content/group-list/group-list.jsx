import React, { Component } from 'react'
import './group-list.less'
import { List, Avatar } from 'antd';

import { getGroups } from '../../../../api/memberList'
import storageUtils from '../../../../utils/storageUtils'
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
const userId = storageUtils.getUser()
console.log('userIduserId', userId)
getGroups({userId: userId.username}).then(res => {
  console.log('res', res)
})

export default class GroupList extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  render(){
    console.log('123', this.props.type)
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