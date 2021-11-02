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
  wrapper.vm.$nextTick(() => {
    wrapper.vm.$nextTick(() => {
      const bannerList = wrapper.findAllComponents({ name: 'el-carousel-item' })
      console.log(bannerList.length)
      expect(bannerList.length).toBe(6)
      done()
    })
  })
})
