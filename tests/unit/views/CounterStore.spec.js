import { shallowMount } from '@vue/test-utils'
import store from '@/store';
import CounterStore from '@/views/CounterStore.vue'

describe('CounterStore.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(CounterStore, { global: { plugins: [store] } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should call increment after button click', () => {
    const wrapper = shallowMount(CounterStore, { global: { plugins: [store] } })
    const spyIncrement = jest.spyOn(store, 'dispatch').mockImplementation()
    wrapper.find('button').trigger('click')
    expect(spyIncrement).toHaveBeenCalledWith('increment')
  })
})
