import mybanner from '../index.vue'
import {
  mount
} from '@vue/test-utils'
import ElementPuls from 'element-plus'
test('测试', (done) => {
  const wrapper = mount(mybanner, {
    global: {
      plugins: [ElementPuls]
    }
  })
  console.log(wrapper)
  wrapper.vm.$nextTick(() => {
    console.log(wrapper.vm.bannerList)
    done()
  })
})
