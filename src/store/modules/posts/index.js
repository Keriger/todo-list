const state = {
  posts: [],
  filters: [],
};

const getters = {};

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
    localStorage.setItem("user", JSON.stringify(data));
    state.isAuthenticated = true;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
