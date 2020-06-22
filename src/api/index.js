import ajax from './ajax'

// const BASEUrl = 'http://10.11.24.129:8080'
const BASE = ''
// 登录
export const login = (username, password) => ajax(BASE + '/api/auth/jwt/token', {username, password}, 'POST')