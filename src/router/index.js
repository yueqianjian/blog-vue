import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/home',
        name: 'main',
        component: Main,
        children: [{
            path: '/home',
            name: 'home',
            component: Home,
        }]
    }]
})