<template>
  <div id="clock" class="vertical-center">
    <Clock />
  </div>
</template>
  
<script>
import Clock from './Clock.vue'

export default {
  name: 'Time',

  components: {
        Clock
    }
}
</script>

<style scoped>
#clock
{
  font-size: 20vw;
}
</style>
