<template>
<div>
  <h2>Calculator</h2>

  <div v-if="a && b">
    <h2>Results</h2>
    <p>{{ a }} + {{ b }} = {{ Number(a) + Number(b) }}</p>
    <p>{{ a }} - {{ b }} = {{ Number(a) - Number(b) }}</p>
    <p>{{ a }} * {{ b }} = {{ Number(a) * Number(b) }}</p>
    <p>{{ a }} / {{ b }} = {{ Number(a) / Number(b) }}</p>
  </div>

  <input type="number" v-model="a">
  <input type="number" v-model="b">
</div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      a: null,
      b: null
    }
  }
}
</script>
