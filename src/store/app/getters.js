'use strict';


const getters = {
  article(state) {
    let obj = { ...state.article }
    obj.content = state.articleContent
    return obj
  }
};

export default getters;
