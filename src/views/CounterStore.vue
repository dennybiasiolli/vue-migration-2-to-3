<template>
  <div>
    <p>Count is: {{ count }}</p>
    <p>Number is {{ isEven ? 'even' : 'odd' }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count']),
    ...mapGetters(['isEven']),
  },
  methods: {
    ...mapActions(['increment']),
  },
}
</script>
