<template>
  <button @click="incrementCount">
    {{ count }} clicks so far
  </button>
</template>

<script>
export default {
  name: 'Clickr',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    }
  }
}
</script>

<style lang="css" scoped>
button {
  background-color: yellow;
}
</style>
