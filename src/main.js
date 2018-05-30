import Vue from 'vue'
import Axios from 'axios';
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store/app'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './mock'

sync(store, router);
Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
