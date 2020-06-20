/*
包含应用中所有接口请求函数的模块
根据接口文档定义接口请求
*/
import ajax from './ajax'
// 登录
export  const login = (userName, password) => ajax('/login', {userName, password}, 'POST')

// 添加用户
export const createUser = (user) => ajax('/manage/user/add', user, 'POST')