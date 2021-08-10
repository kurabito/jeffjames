import {
    createRouter,
    createWebHistory
  } from 'vue-router/dist/vue-router.esm-bundler';
  import FeatureList from './components/FeatureList.vue';
  // import Feature from './components/Feature.vue';
  import Golf from './components/Golf.vue';
  
  export default () =>
    createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          name: 'Features',
          component: FeatureList
        },
        {
          path: '/golf',
          name: 'Golf',
          component: Golf
        }
      ]
    });