/*
  包含n和action creator函数的模块
  同步action： 对象{type: 'xxx', data: 数据值}
  异步action： 函数dispatch => {}
*/
import { SET_HEAD_TITLE } from './action-types'
export const setHeadTitle = (headTitle) => ({type: SET_HEAD_TITLE, data: headTitle})