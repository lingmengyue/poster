<template>
  <div id="app">
      <guide/>
  </div>
</template>

<script>
import guide from './components/user_poster/index.vue';

export default {
  name: 'App',
  components: {
    guide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
