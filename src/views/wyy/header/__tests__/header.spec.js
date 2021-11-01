import ElementPlus from 'element-plus'
import myheader from '../index.vue'
import logDialog from '@/components/loginDialog'
import testBox from '@/components/test-element'
import {
  mount,
  shallowMount
} from '@vue/test-utils'
import store from '@/store'
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

  test('验证 dialog在点击前是否可见', async () => {
    const wrapper = mount(myheader, {
      global: {
        plugins: [ElementPlus]
      }
    })
    // const testwrapper = wrapperBox.find(testBox)
    // const loginWrapper = wrapper.findComponent(logDialog)
    await wrapper.find('.loginBtn').trigger('click')
    expect(store.state.openBox).toBe(true)
    // 当取消按钮点击。store.state.openBox 应该为 false
    // await loginWrapper.find('.cancel').trigger('click')
    // console.log(dialogBox.vm.testFn('aaaaaaaaaa'), '===', store.state.openBox)
    // expect(store.state.openBox).toBe(false)
  })
  test('测试 navlist', async () => {
    const wrapper = mount(myheader, {
      global: {
        plugins: [ElementPlus]
      }
    })
    // element组件还是要findComponent
    await wrapper.find('[test-data="searchInput"]').setValue('aaaaaa')
    // await search.setValue('aaaaaa')
    console.log(wrapper.vm.searchVal /*  */, '-+---value')
    expect(wrapper.find('.searchSpan').text()).toBe('aaaaaa')
  })
  test('测试登陆流程', () => {
    expect(true).toBe(true)
  })
})
