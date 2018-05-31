'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  articleList: [],
  article: {},
  isAdmin: true,
  host: 'http://127.0.0.1:7001'
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
