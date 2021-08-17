<template>
  <div id="clock">
    <div class="vertical-center">
      {{hours}}:{{minutes}}:{{seconds}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    zeroPad (number) {
      return ('0' + number).slice(-2)
    },
    setTime () {
      setInterval(() => {
        const date = new Date()
        this.hours = date.getHours()
        if (this.hours > 12)
          this.hours = this.hours - 12;
        this.minutes = this.zeroPad(date.getMinutes())
        this.seconds = this.zeroPad(date.getSeconds())
      }, 1000)
    }
  },
  mounted () {
    this.setTime()
  }
}
</script>

<style scoped>
#clock
{
	height: 90vh;
  font-size: 20vw;
}
</style>
