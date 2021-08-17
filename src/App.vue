<template>
  <Header />
  <div id="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
    components: {
      Header,
      Footer
  }
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
/* h4
{
	font-size: 10pt;
} */
img
{
  max-width: 100%;
  height: auto
}
#header
{
  max-width: 1200px;
  clear: both
}
/* #content
{
	min-height: 600px;
} */
#golf
{
  width: 500px;
  margin: auto
}
#clock
{
	height: 600px;
  font-size: 20vw;
}
#footer
{
	padding: 10px 0;
	font-size: xx-small;
}
nav
{
  float: right
}
router-link
{
  margin-left: 10px
}
nav > span
{
  margin-left: 10px
}
.left-margin
{
  margin-left: 10px
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
