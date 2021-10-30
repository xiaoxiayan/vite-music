import ElementPlus from 'element-plus'
import myheader from '../index.vue'
import logDialog from '@/components/loginDialog'
import testBox from '@/components/test-element'
import { loginData } from '@/server/test_getData'
import {
  mount,
  shallowMount
} from '@vue/test-utils'
import store from '@/store'

jest.mock('@/server/test_getData.js', () => (
  {
    __esModule: true,
    loginData: jest.fn((data) => ({
      userName: 'xxp',
      avatarUrl: 'xxp.com'
    }))
  }
))
// describe('测试登陆按钮打开dialog', () => {F
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
//
describe('header 组件', () => {
  // const wrapper = mount(myheader, {
  //   global: {
  //     plugins: ElementPlus,
  //     provide: {
  //       store
  //     }
  //   }
  // })
  // const showElement = {
  //   template: ''
  // }
  // const mockComponent = {
  //   template: '<div><slot></slot></div>'
  // }
  // const globalComponents = {
  //   'el-autocomplete': mockComponent,
  //   'el-dialog': mockComponent,
  //   'el-button': mockComponent,
  //   'el-form': mockComponent,
  //   'el-form-item': mockComponent,
  //   'el-input': mockComponent
  // }
  // test('list列表的内容', async () => {
  //   const navList = wrapper.findAll('.nav')
  //   expect(navList.at(0).text()).toBe('发现音乐')
  // })

  // test('验证 dialog在点击前是否可见', async () => {
  //   const wrapper = mount(myheader, {
  //     global: {
  //       plugins: [ElementPlus]
  //     }
  //   })
  //   // const testwrapper = wrapperBox.find(testBox)
  //   const loginWrapper = wrapper.findComponent({ name: 'el-dialog' })
  //   await wrapper.find('.loginBtn').trigger('click')
  //   expect(store.state.openBox).toBe(true)
  //   // 当取消按钮点击。store.state.openBox 应该为 false
  //   console.log(loginWrapper)
  //   // console.log(dialogBox.vm.testFn('aaaaaaaaaa'), '===', store.state.openBox)
  //   // expect(store.state.openBox).toBe(false)
  // })
  test('测试 navlist', async () => {
    const wrapper = mount(myheader, {
      global: {
        plugins: [ElementPlus]
      }
    })
    // element组件还是要findComponent
    await wrapper.find('[test-data="searchInput"]').setValue('aaaaaa')
    // console.log('-====', wrapper.find('[test-data="searchInput"]'))
    // await search.setValue('aaaaaa')
    // console.log(wrapper.vm.searchVal /*  */, '-+---value')
    expect(wrapper.find('.searchSpan').text()).toBe('aaaaaa')
  })
  test('集成测试点击dialog。 setValue, 登陆', async () => {
    const wrapper = mount(myheader, {
      global: {
        plugins: [ElementPlus]
      }
    })
    // 首先点击，测试点击的情况
    await wrapper.find('.loginBtn').trigger('click')
    expect(store.state.openBox).toBe(true)
    const dialogWrapper = wrapper.findComponent(logDialog)
    expect(dialogWrapper.find('.action').isVisible()).toBe(true)
    const inputList = dialogWrapper.findAllComponents('.formInput')
    await inputList[0].setValue('18976203568')
    await inputList[1].setValue('a690150')
    const formData = dialogWrapper.findComponent({ name: 'el-form' }).vm.model
    console.log(formData, 'data')
    expect(formData).toEqual({ myphone: '18976203568', passWord: 'a690150' })
    await dialogWrapper.find('.action').trigger('click')
    const res = await loginData(formData)
    expect(res).toEqual({ userName: 'xxp', avatarUrl: 'xxp.com' })
    expect(wrapper.find('.userAvatar').exists()).toBe(true)
  })
})
