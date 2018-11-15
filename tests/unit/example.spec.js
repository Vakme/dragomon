import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
  it('renders proper text', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.find('.card-text').text()).to.equals('To see what\'s inside, log in with Google')
  })
})
