<template>
  <div>
    <h1>Edit Word</h1>
    <word-form :word="this.word" @createOrUpdate="createOrUpdate"></word-form>
  </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'word-form': WordForm,
  },
  data() {
    return {
      word: {}
    };
  },
  methods: {
    async createOrUpdate(word) {
      await api.updateWord(word);
      this.flash('Word updated', 'success');
      this.$router.push(`/words/${ word._id }`); // redirect to show.
    }
  },
  async mounted() {
    this.word = await api.getWord(this.$route.params.id);
  }
}
</script>
