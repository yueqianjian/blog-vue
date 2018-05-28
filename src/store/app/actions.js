'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';

const actions = {

  getArticleList: ({ commit, dispatch, state }) => {
    if (!state.articleList.length) {
      return axios.get(`${host}/api/article/list`)
        .then(response => {
          let data = response.data;
          commit('setArticleList', data);
          return data;
        })
    }
    return Promise.resolve();
  }
};

export default actions;


