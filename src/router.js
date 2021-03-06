import {
    createRouter,
    createWebHistory
  } from 'vue-router/dist/vue-router.esm-bundler';
  import Home from './components/Home.vue';
  import Sake from './components/Sake.vue';
  import Beer from './components/Beer.vue';
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
          path: '/sake',
          name: 'Sake',
          component: Sake
        },
        {
          path: '/beer',
          name: 'Beer',
          component: Beer
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