<template>
    <div>
      <img src="https://jeffjames.s3.us-west-2.amazonaws.com/sunset2011.jpg" border="0" alt="Sunset" />
    </div>
    <div>
      <h2><router-link to="/time">Time</router-link></h2>
    </div>
    <div>
      <h2><router-link to="/weather">Weather</router-link></h2>
    </div>
    <div>
      <h2><router-link to="/current">Time and Weather</router-link></h2>
    </div>
    <div>
      <h2><a href="https://www.wordlehelp.site" target="_blank">Wordle Help</a></h2>
    </div>
</template>
  
  <script>
  export default {
    name: 'Other'
  }
  </script>
