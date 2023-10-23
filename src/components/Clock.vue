<template>
  {{hours}}:{{minutes}}:{{seconds}}
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
      const date = new Date()
      this.hours = date.getHours()
      if (this.hours > 12)
        this.hours = this.hours - 12;
      this.minutes = this.zeroPad(date.getMinutes())
      this.seconds = this.zeroPad(date.getSeconds())
      },
    updateTime () {
      setInterval(() => {
        this.setTime()
      }, 1000)
    }
  },
  mounted () {
    this.setTime()
    this.updateTime()
  }
}
</script>
