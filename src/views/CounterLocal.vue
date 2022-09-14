<template>
  <div>
    <p>Count is: {{ count }}</p>
    <p>Number is {{ isEven ? 'even' : 'odd' }}</p>
    <button @click="() => increment()">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 }
  },
  computed: {
    isEven() {
      return this.count % 2 === 0
    },
  },
  methods: {
    increment() {
      this.count++
    },
  },
}
</script>
