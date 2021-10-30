// 测试mock接口
import axios from "./axios";

//login
const login = (data) => {
  return axios({
    method: 'get',
    params: data
  })
}

export [
  login
]