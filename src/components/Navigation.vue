<template>
  <nav>
    <span>
      <router-link to="/">home</router-link>
    </span>
    <span>
      <a href="https://thorlyjames.com" target="_blank">thorly</a>
    </span>
    <span>
      <router-link to="/sake">sake</router-link>
    </span>
    <span>
      <router-link to="/beer">beer</router-link>
    </span>
    <span>
      <router-link to="/golf">golf</router-link>
    </span>
    <span>
      <router-link to="/clock">clock</router-link>
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