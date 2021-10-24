import myheader from '../index.vue'
import logDialog from '@/components/loginDialog'
import { mount, shallowMount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
describe('测试登陆按钮打开dialog', () => {
  const mockComponent = {
    template: '<div><slot></slot></div>'
  }
  const globalComponents = {
    'el-autocomplete': mockComponent,
    'el-dialog': mockComponent,
    'el-button': mockComponent,
    'el-form': mockComponent,
    'el-form-item': mockComponent,
    'el-input': mockComponent
  }
  // 获取一下按钮
  test('action', async () => {
    const wrapper = mount(myheader, {
      global: {
        // plugins: [ElementPlus],
        components: {
          logDialog
        }
      }
    })
    await wrapper.find('.user .loginBtn').trigger('click')
    const appWrapper = wrapper.get('.logindDialogbox')

    console.log(wrapper.html(), 'aaaaaaaa')
    console.log(appWrapper.attributes('modelvalue='), '======')
    // expect(appWrapper.exists()).toBe(true)
    // 测试 点击后，stroe的值是否变化，或者说测试 点击后，是否出现了这个弹窗
  })
})
