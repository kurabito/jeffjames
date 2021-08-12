<template>
  <div id="content">

    <!-- Hard coded image
    <br />
    <img src="./assets/top.jpg" />
    <img v-bind:src="require('./assets/top.jpg')" />
    <br />
    Router
    <br /> -->



    <router-view />
  </div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
// import FeatureList from './components/FeatureList.vue'
// import Feature from './components/Feature.vue'

export default {
  name: 'App',
  components: {
    Footer,
    // FeatureList,
    // Feature
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  width: 1200px;
  margin: auto
}

/* body
{ */
	/* center page content for IE */
	/* text-align: center;
	padding: 10px;
} */
/* body
{ 
	text-align: center;
	padding: 10px;
} */
a
{
  color: black;
  text-decoration : none
}
a:hover
{
	text-decoration : underline
}
h4
{
	font-size: 10pt;
}
#header
{
	/* float: left;
	width: 600px;
	height: 100px;
	border: 1px solid silver;
	border-bottom: none; */
	/* text-align: left; */
  width: 1200px;
  clear: both
}
#golf
{
  width: 500px;
  margin: auto
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
nav > span
{
  margin-left: 10px
}
/* #app
{
	width: 600px;
	font-family: Verdana, Arial, Sans-Serif; */
	/* center page content for Firefox */
	/* margin: 0 auto 10px auto;
} */
/* #header
{
	float: left;
	width: 600px;
	height: 100px;
	border: 1px solid silver;
	border-bottom: none;
	text-align: left;
}
#content
{
	float: left;
	width: 600px;
	border: 1px solid silver;
	padding: 15px 0 10px 0;
	text-align: left;
}
#nav
{
	float: left;
	width: 600px;
	border: 1px solid silver;
	border-top: none;
	padding: 10px 0;
	font-size: xx-small;
}
#footer
{
	float: left;
	width: 600px;
	border: 1px solid silver;
	border-top: none;
	padding: 10px 0;
	font-size: xx-small;
}
.text
{
	padding: 15px;
}
.small
{
	font-size: smaller;
} */
/* .noborder
{ */
/*	
	border: none;
*/
	/* padding: none;
	margin: none;
}
.spacer
{
	height: 10px;
} */
.feature
{
  text-align: center;
}
.left
{
  float: left;
}
/* 
body {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
div {
    margin: 10px;
}
label {
    display: block;
}
input {
    width: 10ch;
}
a {
    color: black;
}
h1 > a {
    text-decoration: none;
} */
</style>
