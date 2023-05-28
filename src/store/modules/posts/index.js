const state = {
  posts: [],
  filters: [],
};

const getters = {
  posts: (state) => state.posts,
};

const actions = {
  async getPosts({ commit }) {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos`);

      let result = await response.json();
      console.log(result);
      commit("getPosts", result);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  getPosts: (state, data) => {
    state.posts = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
