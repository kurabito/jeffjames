<template>
  <h1>Golf</h1>
</template>

<script>
export default {
  name: 'Golf',
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
        const date = new Date()
        this.year = date.getFullYear()
    }
  },
  mounted () {
    this.setYear()
  }
}
</script>
