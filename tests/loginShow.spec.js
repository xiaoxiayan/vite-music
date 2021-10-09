import header from '../src/views/wyy/header/index.vue'
import { mount } from '@vue/test-utils'
import { describe, it } from 'jest-circus'

describe("header", () => {
  it('获取logo', () => {
    const wrapper = mount(header);
    const profile = wrapper.get(".logo")

    console.log(profile, 'logo')
  })
})