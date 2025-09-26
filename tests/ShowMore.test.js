import { mount } from '@vue/test-utils';
import ShowMore from '../src/ShowMore.vue';

describe('ShowMore.vue', () => {
  function mountAndWait(props, slot) {
    const wrapper = mount(ShowMore, {
      slots: { default: slot },
      props
    });
    // Wait for Vue to update refs and computed
    return wrapper.vm.$nextTick().then(() => wrapper);
  }

  it('renders short text when text is longer than length', async () => {
    const wrapper = await mountAndWait({ length: 10 }, 'This is a long text that should be truncated.');
    expect(wrapper.find('.short-text').text()).toBe('This is a ');
    expect(wrapper.find('.show-more-btn').exists()).toBe(true);
  });

  it('shows full text when show more is clicked', async () => {
    const wrapper = await mountAndWait({ length: 10 }, 'This is a long text that should be truncated.');
    await wrapper.find('.show-more-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.full-text').text()).toBe('This is a long text that should be truncated.');
    expect(wrapper.find('.show-more-btn').text()).toBe('×');
  });

  it('shows less text when show less is clicked', async () => {
    const wrapper = await mountAndWait({ length: 10 }, 'This is a long text that should be truncated.');
    await wrapper.find('.show-more-btn').trigger('click');
    await wrapper.vm.$nextTick();
    await wrapper.find('.show-more-btn').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.short-text').text()).toBe('This is a ');
  });

  it('renders full text if text is shorter than length', async () => {
    const wrapper = await mountAndWait({ length: 20 }, 'Short text');
    expect(wrapper.find('.short-text').text()).toBe('Short text');
    expect(wrapper.find('.show-more-btn').exists()).toBe(false);
  });

  it('renders tooltip when showTooltip is true', async () => {
    const wrapper = await mountAndWait({ showTooltip: true, tooltipHeader: 'Header', tooltipColor: 'red', length: 5 }, 'Tooltip text for testing.');
    expect(wrapper.findComponent({ name: 'tooltip' }).exists()).toBe(true);
  });

  it('does not render tooltip when showTooltip is false', async () => {
    const wrapper = await mountAndWait({ showTooltip: false, length: 5 }, 'Tooltip text for testing.');
    expect(wrapper.findComponent({ name: 'tooltip' }).exists()).toBe(false);
  });
});
