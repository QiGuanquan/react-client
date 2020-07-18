import ajax from '../ajax'

// const BASEUrl = 'http://10.11.24.129:8080'
const BASE = ''
// 获取群组列表
export const getGroups = (userId) => ajax(BASE + '/api/chat/zzGroup/queryGroupListByUserId', userId, 'GET')