// 测试mock接口
import axios from './axios'
import { loginInfo } from './appServe'
import apiKeyDataType from './api'
// fetch.js
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async login (data:any) {
    return axios(
      {
        url: 'loginMusic',
        method: 'GET',
        data: data
      }
    ).then(res => {
      return callback(res)
    })
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function callback (res: { code: number; profile: any }): any {
  throw new Error('Function not implemented.')
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

// interface logiType {
//         code: number,
//         profile: any
// }
// login
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
