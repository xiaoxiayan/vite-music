import myheader from '../index.vue'
import logDialog from '@/components/loginDialog'
import { mount, shallowMount } from '@vue/test-utils'
import ElementPlus from 'element-plus'
// describe('测试登陆按钮打开dialog', () => {
//   const mockComponent = {
//     template: '<div><slot></slot></div>'
//   }
//   const globalComponents = {
//     'el-autocomplete': mockComponent,
//     'el-dialog': mockComponent,
//     'el-button': mockComponent,
//     'el-form': mockComponent,
//     'el-form-item': mockComponent,
//     'el-input': mockComponent
//   }
//   // 获取一下按钮
//   test('action', async () => {
//     const msg = 'hello lv'
//     const wrapper = shallowMount(myheader, {
//       props: { message: msg },
//       global: {
//         plugins: [ElementPlus],
//         components: {
//           // logDialog
//         }
//         // stubs: ['loginDialog']
//       }
//     })
//     await wrapper.find('.user .loginBtn').trigger('click')
//     const loginBox = wrapper.findComponent('.logindDialogbox')
//     await wrapper.setProps({ message: 'hello' })
//     expect(wrapper.props('message')).toEqual('hello')
//     expect(loginBox.props()).toEqual({
//       truthy: true,
//       object: {},
//       string: 'string'
//     })
//   })
// })
// test('测试子组件', () => {
//   const ChildComponent = {
//     name: 'Child',
//     template: '<div class="child"></div>'
//   }
//   const RootComponent = {
//     name: 'Root',
//     components: { ChildComponent },
//     template: '<child-component class="root" />'
//   }
//   const wrapper = mount(RootComponent)
//   const rootByCss = wrapper.findComponent('.root') // => finds Root
//   expect(rootByCss.vm.$options.name).toBe('Root')
//   const childByCss = wrapper.findComponent('.child')
//   expect(childByCss.vm.$options.name).toBe('Root') // => still Root
// })
