import logDialog from '../loginDialog.vue'
import { mount, shallowMount } from '@vue/test-utils'

// 需求 1、修改状态时显示。 2、登陆功能。 3、验证功能。
describe('测试输入是否正确', () => {
  it('aa', () => {
    // given ,数据, 显示状态数据 boolean, 登陆的账号密码
    const loginInfo = {
      phone: '121111111',
      password: '1234'
    }
    const wrapper = mount(logDialog)
    console.log(wrapper.vm.testFn(loginInfo))
    // when ， 当 islogin 为 true  组件显示。 验证，phone，password正确性，  为空的时候不去提交
    // then
    expect(wrapper.vm.testFn(loginInfo)).toBe(true)
  })
})
describe('测试提交内容', () => {
  test('submitAction', async () => {
    const wrapper = shallowMount(logDialog)
    const phone = '18976203568'
    const password = '1234'
    await wrapper.find('#loginDialog .action').trigger('click')
    console.log(wrapper.find('span').text())
    expect(wrapper.find('span').text()).toBe('Count: 1')
  })
})
