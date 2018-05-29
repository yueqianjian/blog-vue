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
      path: '/login',
      component: () => import('../views/login')
    },
    {
      path: '/article',
      redirect: '/article/list',
      component: () => import('../components/article/index'),
      children: [
        {
          path: 'list',
          component: () => import('../components/article/list')
        },
        {
          path: 'edit',
          component: () => import('../components/article/edit')
        },
        {
          path: 'detail/:id',
          component: () => import('../components/article/detail')
        }
      ]
    }
  ]
});

export default router;
