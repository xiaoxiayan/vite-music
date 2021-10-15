import logDialog from '../../src/components/loginDialog.vue'
import { mount } from '@vue/test-utils'
// 需求 1、修改状态时显示。 2、登陆功能。 3、验证功能。
describe('测试输入是否正确', () => {
  // given ,数据, 显示状态数据 boolean, 登陆的账号密码
  const loginInfo = {
    phone: '18976203568',
    password: '1234'
  }
  const wrapper = mount(logDialog)
  // when ， 当 islogin 为 true  组件显示。 验证，phone，password正确性，  为空的时候不去提交

  // then
  expect(formData).toEqual(loginInfo)
})
