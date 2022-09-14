import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CounterStore from '@/views/CounterStore.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CounterStore.vue', () => {
  let store
  let actions

  beforeEach(() => {
    actions = {
      increment: jest.fn(),
    }
    store = new Vuex.Store({
      state: { count: 0 },
      getters: {
        isEven: () => true,
      },
      actions,
    })
  })

  it('renders as expected', () => {
    const wrapper = shallowMount(CounterStore, { store, localVue })
    expect(wrapper).toMatchSnapshot()
  })

  it('should call increment after button click', () => {
    const wrapper = shallowMount(CounterStore, { store, localVue })
    wrapper.find('button').trigger('click')
    expect(actions.increment).toHaveBeenCalled()
  })
})
