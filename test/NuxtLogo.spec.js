import { mount } from '@vue/test-utils'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {// test from Philip
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
