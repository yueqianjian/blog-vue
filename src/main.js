import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})