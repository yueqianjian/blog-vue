import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './mock'

Vue.use(iView)

Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})