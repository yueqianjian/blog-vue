'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const host = 'http://127.0.0.1:7001';
// const host = 'http://140.143.234.190:7001';

const actions = {
    login({ commit, dispatch, state }, { username, password }) {
        return axios.post(`${host}/api/login`, {
            username,
            password
        }).then(response => {
            return Promise.resolve(response.data);
        })
    },
    getArticleList({ commit, dispatch, state }) {
        if (!state.articleList.length) {
            return axios.get(`${host}/api/article/list`)
                .then(response => {
                    let data = response.data;
                    commit('update', ['articleList', data]);
                    return data;
                })
        }
        return Promise.resolve();
    },
    getContent({ commit, dispatch, state }) {
        return axios.post(`${host}/api/article/getContent`, {
            id: state.article.content
        }).then(response => {
            let data = response.data;
            commit('update', ['articleContent', data]);
            return Promise.resolve();
        })
    },
    saveArticle({ commit, dispatch, state }, { title, info, content }) {
        let id = state.article._id
        let save = id ? 'update' : 'create'
        return axios.post(`${host}/api/article/${save}`, {
            id,
            title,
            info,
            content
        }).then(response => {
            return Promise.resolve();
        })
    },
    deleteArticle({ commit, dispatch, state }, { id }) {
        return axios.post(`${host}/api/article/remove`, {
            id
        }).then(response => {
            return Promise.resolve();
        })
    }
};

export default actions;