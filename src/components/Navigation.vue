<template>
  <nav>
    <span>
      <router-link to="/">Home</router-link>
    </span>
    <span>
      <a href="https://thorlyjames.com" target="_blank">Thorly</a>
    </span>
    <span>
      <router-link to="/sake">Sake</router-link>
    </span>
    <span>
      <router-link to="/beer">Beer</router-link>
    </span>
    <span>
      <router-link to="/golf">Golf</router-link>
    </span>
    <span>
      <router-link to="/weather" replace>Weather</router-link>
    </span>
    <span>
      <router-link to="/clock">Clock</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
nav
{
  float: right
}
nav > span
{
  margin-left: 10px
}
</style>