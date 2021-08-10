<template>
  Feature List
  <nav>
    <!-- <div>
      <router-link to="/golf">Golf</router-link>
    </div> -->
    <Feature link='/golf' image='top.jpg' title='Golf' />
  </nav>
</template>

<script>
import Feature from './Feature.vue'

export default {
  name: 'FeatureList',
  components: {
    Feature
  }

}
</script>
