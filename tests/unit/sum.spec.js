//  header from '../../src/views/About.vue'
import hearder from '@/views/wyy/header/index.vue'
import { mount } from '@vue/test-utils'

describe('header', () => {
  it('获取logo', () => {
    const wrapper = mount(hearder)
    const profile = wrapper.get('.logo')
    console.log(profile, 'logo')
  })
})
