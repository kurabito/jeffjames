<template>
	<div id="main">
    <div id="header">
      <a href="/"><img src="./assets/top.jpg" border="0" alt="Jeff James" /></a>
    </div>
    <div id="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
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
  color: #2c3e50;
  margin-top: 60px;
}

body
{
	/* center page content for IE */
	text-align: center;
	padding: 10px;
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
h4
{
	font-size: 10pt;
}
#main
{
	width: 600px;
	font-family: Verdana, Arial, Sans-Serif;
	/* center page content for Firefox */
	margin: 0 auto 10px auto;
}
#header
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
/*
	padding: 20px;
*/
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
}
.noborder
{
/*	
	border: none;
*/
	padding: none;
	margin: none;
}
.spacer
{
	height: 10px;
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
