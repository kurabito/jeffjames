<template>
  <Header />
  <div>
    <router-view />
  </div>
  <Footer id="footer" />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 10px;
  max-width: 1200px;
  margin: auto
}
a
{
  color: black;
  text-decoration : none
}
a:hover
{
	text-decoration : underline
}
img
{
  max-width: 100%;
  height: auto
}
.left
{
  float: left;
}
.vertical-center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
