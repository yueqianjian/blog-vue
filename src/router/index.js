import Vue from 'vue';

import VueRouter from 'vue-router';

import Main from '../views/main';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/list',
      component: Main
    },
    {
      path: '/detail/:id',
      component: () => import('../views/main')
    }
  ]
});

export default router;
