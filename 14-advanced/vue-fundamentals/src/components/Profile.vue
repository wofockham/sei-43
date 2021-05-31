<template>
  <div class="profile">
    <h2>{{ name }}</h2>
    <h3>{{ bio }}</h3>
    <div>
      <button @click="zoomIn">+</button>
      <button @click="zoomOut">-</button>
    </div>
    <img v-if="size > 0" v-bind:src="pic" v-bind:alt="name" v-bind:height="size" />
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    name: String,
    bio: String,
    pic: String
  },
  data() {
    return {
      size: 100
    };
  },
  methods: {
    zoomIn() {
      this.size += 10;
    },
    zoomOut() {
      this.size -= 10;
    }
  }
};
</script>

<style lang="css" scoped>
div.profile {
  border: 1px solid red;
}

button {
  background-color: blue;
}
</style>
