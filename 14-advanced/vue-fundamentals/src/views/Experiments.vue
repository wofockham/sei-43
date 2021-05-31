<template>
  <div>
    <h1>Experiments</h1>

    <Clickr />
    <Clickr />
    <Clickr />

    <button>Do nothing</button>

    <hr>

    <Profile name="Groucho" bio="no gods no masters" pic="http://www.fillmurray.com/400/600" />
    <Profile name="Harpo" pic="http://www.fillmurray.com/400/601" />
    <Profile name="Chico" bio="no dogs no masters" pic="http://www.fillmurray.com/401/600" />

    <hr>

    <Calculator />
  </div>
</template>

<script>
// @ is a shortcut to 'src'
import Clickr from '@/components/Clickr.vue';
import Profile from '@/components/Profile.vue';
import Calculator from '@/components/Calculator.vue';
export default {
  name: 'Experiments',
  components: {
    Clickr,
    Profile,
    Calculator
  }
};
</script>
