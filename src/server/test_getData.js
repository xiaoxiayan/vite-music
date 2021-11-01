// 测试mock接口
import axios from 'axios'

// login
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const loginData = (data) => axios({
  url: '/aaa/login/cellphone',
  method: 'get',
  params: data
})

export {
  loginData
}
