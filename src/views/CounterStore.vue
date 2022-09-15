<template>
  <div>
    <p>Count is: {{ count }}</p>
    <p>Number is {{ isEven ? 'even' : 'odd' }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'

const count = computed(() => store.state.count)

const isEven = computed(() => store.getters.isEven)

const increment = () => store.dispatch('increment')
</script>
