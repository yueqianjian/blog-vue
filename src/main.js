import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/app'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

sync(store, router);
Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});