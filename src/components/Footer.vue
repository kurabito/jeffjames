<template>
  <div id="footer">
    © 2002 - {{year}} Jeff James. All rights reserved.
  </div>
  <div class="spacer">&nbsp;</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: 0
    }
  },
  methods: {
    setYear () {
        const date = new Date()
        this.year = date.getFullYear()
    }
  },
  mounted () {
    this.setYear()
  }
}
</script>
