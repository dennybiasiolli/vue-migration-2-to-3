import { shallowMount } from '@vue/test-utils'
import CounterLocal from '@/views/CounterLocal.vue'

describe('CounterLocal.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(CounterLocal)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call increment after button click', async () => {
    const wrapper = shallowMount(CounterLocal)
    expect(wrapper.find('p').text()).toBe('Count is: 0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('p').text()).toBe('Count is: 1')
  })
})
