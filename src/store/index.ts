import { createStore } from 'vuex'

export default createStore({
  state: {
    // 登陆状态
    isLogin: false,
    // 登陆信息
    userInfo: {
      avatarUrl: ''
    }
  },
  // 修改变量（state不能直接赋值修改，只能通过mutations）
  mutations: {
    GET_ISLOGIN (state, newValue) {
      state = newValue
    },
    GET_USERINFO (state, newValue) {
      state = newValue
    }
  },
  // mutations的值由actions传入
  actions: {
    SET_ISLOGIN (context, newValue) {
      context.commit('GET_ISLOGIN', newValue)
    },
    SET_USERINFO (context, newValue) {
      context.commit('GET_USERINFO', newValue)
    }
  },
  modules: {
  }
})
