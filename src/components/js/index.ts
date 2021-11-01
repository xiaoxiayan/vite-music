
import axios from 'axios'

export const login = (data: any):void => {
  axios({
    url: 'loginMusic',
    method: 'GET',
    data: data
  }).then(res => {
    // if (res.code === 200) {
    //   $store.dispatch('SET_ISLOGIN', true)
    //   $store.dispatch('SET_USERINFO', res.profile)
    //   $store.dispatch('SET_OPENBOX', false)
    // }
  })
  // if (verify(data)) {
  //   axios({
  //     url: 'loginMusic',
  //     method: 'GET',
  //     data: data
  //   }).then(res => {
  //     if (res.code === 200) {
  //       $store.dispatch('SET_ISLOGIN', true)
  //       $store.dispatch('SET_USERINFO', res.profile)
  //       $store.dispatch('SET_OPENBOX', false)
  //     }
  //   })
  // } else {
  //   ElMessage.error('请输入正确的手机号码')
  // }
}
