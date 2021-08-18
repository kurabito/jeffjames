import {
    createRouter,
    createWebHistory
  } from 'vue-router/dist/vue-router.esm-bundler';
  import Home from './components/Home.vue';
  import Brewing from './components/Brewing.vue';
  import Golf from './components/Golf/Golf.vue';
  import Clock from './components/Clock.vue';
  
  export default () =>
    createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/brewing',
          name: 'Brewing',
          component: Brewing
        },
        {
          path: '/golf',
          name: 'Golf',
          component: Golf
        },
        {
          path: '/clock',
          name: 'Clock',
          component: Clock
        }
      ]
    });