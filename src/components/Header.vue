<template>
  <div id="header">
    <span class="left"><router-link to="/" class="left">Jeff James</router-link></span>
    <Navigation />
  </div>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  name: 'Header',
  components: {
      Navigation
  }
}
</script>

<style scoped>
#header
{
  max-width: 1200px;
  /* clear: both */
}
</style>