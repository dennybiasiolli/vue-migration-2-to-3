import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    isEven(state) {
      return state.count % 2 === 0
    },
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
  },
  modules: {
  }
})
