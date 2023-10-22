import {
    createRouter,
    createWebHistory
  } from 'vue-router/dist/vue-router.esm-bundler';
  import Home from './components/Home.vue';
  import Sake from './components/Sake.vue';
  import Beer from './components/Beer.vue';
  import Other from './components/Other.vue';
  import Golf from './components/Golf/Golf.vue';
  import Clock from './components/Clock.vue';
  import Weather from './components/Weather/Weather.vue';
  import Time from './components/Time.vue';
  import Current from './components/Current.vue';
  
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
          path: '/other',
          name: 'Other',
          component: Other
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
        },
        {
          path: '/weather',
          name: 'Weather',
          component: Weather
        },
        {
          path: '/time',
          name: 'Time',
          component: Time
        },
        {
          path: '/current',
          name: 'Current Time and Weather',
          component: Current
        }
    ]
    });