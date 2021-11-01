// 测试mock接口
import axios from './axios'

// login
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const login = (data) => axios({
  url: 'loginMusic',
  method: 'GET',
  params: data
})

export {
  login
}
