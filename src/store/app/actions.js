'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// axios.defaults.withCredentials = true
Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {

  FETCH_ARTICLE_LIST: ({ commit, dispatch, state }) => {
    if (!state.articleList.length) {
      return axios.get(`${host}/api/article/list`)
        .then(response => {
          let data = response.data;
          commit('SET_ARTICLE_LIST', data);
          return data;
        })
    }
    return Promise.resolve();
  }
};

export default actions;


