<template>
  <nav>
    <span><router-link to="/">home</router-link></span>
    <span><router-link to="/brewing">brewing</router-link></span>
    <span><router-link to="/golf">golf</router-link></span>
    <span><router-link to="/clock">clock</router-link></span>
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