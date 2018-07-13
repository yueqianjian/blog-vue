import Vue from 'vue';

import VueRouter from 'vue-router';

import Main from '../views/main';

Vue.use(VueRouter);

const router = new VueRouter({
    base: '/',
    routes: [{
            path: '/',
            component: Main,
            redirect: 'game/huarongdao',
            children: [{
                    path: 'article',
                    redirect: 'article/list',
                    component: () =>
                        import ('../components/article/index'),
                    children: [{
                            path: 'list',
                            component: () =>
                                import ('../components/article/list')
                        },
                        {
                            path: 'edit',
                            component: () =>
                                import ('../components/article/edit')
                        },
                        {
                            path: 'detail/:id',
                            component: () =>
                                import ('../components/article/detail')
                        }
                    ]
                },
                {
                    path: 'game',
                    redirect: 'game/list',
                    component: () =>
                        import ('../components/game/index'),
                    children: [{
                            path: 'list',
                            component: () =>
                                import ('../components/game/list')
                        },
                        {
                            path: 'huarongdao',
                            component: () =>
                                import ('../components/game/huaRongDao.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            component: () =>
                import ('../views/login')
        }
    ]
});

export default router;