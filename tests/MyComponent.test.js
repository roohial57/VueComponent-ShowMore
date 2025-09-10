npm run build
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ShowMore from '../src/ShowMore.vue'

describe('ShowMore.vue', () => {
  it('renders default slot text', () => {
    const wrapper = mount(ShowMore)
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders custom slot text', () => {
    const wrapper = mount(ShowMore, {
      slots: { default: 'Hello World' }
    })
    expect(wrapper.text()).toBe('Hello World')
  })
})
