/*
  redux最核心的管理对象store
*/

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { composeWithDevTools } from 'redex-devtools-extension' 
// 向外默认暴漏store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))