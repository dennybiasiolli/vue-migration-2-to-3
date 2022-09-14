<template>
  <div>
    <p>Count is: {{ count }}</p>
    <p>Number is {{ isEven ? 'even' : 'odd' }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import store from '@/store'

export default {
  setup() {
    const count = computed(() => store.state.count)

    const isEven = computed(() => store.getters.isEven)

    const increment = () => store.dispatch('increment')

    return { count, isEven, increment }
  },
}
</script>
