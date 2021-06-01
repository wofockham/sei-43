<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th colspan="3"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(word, i) in words" :key="i">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
          <td width="75" class="center aligned">
            <router-link :to="{ name: 'show', params: { id: word._id } }">
              Show
            </router-link>
          </td>
          <td width="75" class="center aligned">Edit</td>
          <td width="75" class="center aligned">Destroy</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
  name: 'words',
  data() {
    return {
      words: []
    };
  },
  async mounted() {
    this.words = await api.getWords();
  }
};
</script>

<style>
</style>
