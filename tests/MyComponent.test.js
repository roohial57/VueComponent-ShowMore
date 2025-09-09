npm run build
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MyComponent from '../src/MyComponent.vue'

describe('MyComponent.vue', () => {
  it('renders default slot text', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders custom slot text', () => {
    const wrapper = mount(MyComponent, {
      slots: { default: 'Hello World' }
    })
    expect(wrapper.text()).toBe('Hello World')
  })
})
