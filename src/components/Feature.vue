<template>
    <!-- Hard coded image
    <br />
    <img src="./top.jpg" />
    <img v-bind:src="require('../assets/top.jpg')" />
    <br />
    Image parameter
    <br />
    {{ image }}
    <br />
    Parameter set image
    <br />
    <img v-bind:src="require('../assets/' + image)" /> -->
    <!-- <img v-attr:src=image /> -->
    <!-- <img src="{{ image }}" /> -->
    <!-- <br />  
    Router
    <br /> -->
  <div class="feature">
    <!-- <router-link to="/golf">Golf</router-link>
    <router-link v-bind:to="'/golf'">Golf</router-link> -->
    <router-link v-bind:to="'/' + link">
      <img v-bind:src="require('../assets/' + image)" />
      {{ title }}
    </router-link>
    <!-- <router-link vbind:to="'/golf'"> -->
    <!-- <router-link to="/golf">
      <img v-bind:src="require('../assets/' + image)" />
      {{ title }}
      {{ link }}
      {{ image }}
    </router-link>
    <br /> -->
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    link: String,
    image: String,
    title: String
  }
}
</script>
