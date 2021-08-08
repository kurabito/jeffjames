<template>
  <div id="footer">
    © 2002 - {{year}} Jeff James. All rights reserved.
  </div>
  <div class="spacer">&nbsp;</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data () {
    return {
      year: 0
    }
  },
  methods: {
    setYear () {
    //   setInterval(() => {
        const date = new Date()
        this.year = date.getFullYear()
    //     this.hours = date.getHours()
    //     if (this.hours > 12)
    //       this.hours = this.hours - 12;
    //     this.minutes = this.zeroPad(date.getMinutes())
    //     this.seconds = this.zeroPad(date.getSeconds())
    //   }, 1000)
    }
  },
  mounted () {
    this.setYear()
  }
}
</script>
