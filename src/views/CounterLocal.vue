<template>
  <div>
    <p>Count is: {{ count }}</p>
    <p>Number is {{ isEven ? 'even' : 'odd' }}</p>
    <button @click="() => increment()">Increment</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)

const isEven = computed(() => {
  return count.value % 2 === 0
})

function increment() {
  count.value++
}
</script>
