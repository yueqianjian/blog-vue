'use strict';

const mutations = {
  update (state, [name, data]) {
    state[name] = data
  }
};
export default mutations
