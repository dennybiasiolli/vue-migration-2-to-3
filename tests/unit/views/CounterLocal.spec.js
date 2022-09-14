import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { shallowMount } from '@vue/test-utils'
import CounterLocal from '@/views/CounterLocal.vue'

Vue.use(VueCompositionAPI)

describe('CounterLocal.vue', () => {
  it('renders as expected', () => {
    const wrapper = shallowMount(CounterLocal)
    expect(wrapper).toMatchSnapshot()
  })

  it('should call increment after button click', () => {
    const wrapper = shallowMount(CounterLocal)
    const spyIncrement = jest.spyOn(wrapper.vm, 'increment')
    wrapper.find('button').trigger('click')
    expect(spyIncrement).toHaveBeenCalled()
  })
})
