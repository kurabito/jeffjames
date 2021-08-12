import {
    createRouter,
    createWebHistory
  } from 'vue-router/dist/vue-router.esm-bundler';
  import Home from './components/Home.vue';
  // import Feature from './components/Feature.vue';
  import Golf from './components/Golf.vue';
  
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
          path: '/golf',
          name: 'Golf',
          component: Golf
        }
      ]
    });