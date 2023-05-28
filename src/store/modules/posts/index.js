const state = {
  filterTitleText: "",
  posts: [],
  filters: [],
};

const getters = {
  posts: (state) => state.posts,
  filterTitleText: (state) => state.filterTitleText,
};

const actions = {
  async getPosts({ commit }, searchParams = {}) {
    try {
      const { status = 0, userId = "all" } = searchParams,
        params = new URLSearchParams();

      if (status != 0 && status != 3) {
        params.append("completed", status);
      }
      if (userId != "all") {
        params.append("userId", userId);
      }
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?${params}`
      );

      let result = await response.json();
      commit("getPosts", result);
    } catch (error) {
      console.log(error);
    }
  },
  async createPost({ commit }, form) {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(form),
      });
      console.log(response);
      commit("setPost");
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  getPosts: (state, data) => {
    state.posts = data;
  },
  setPost: (state, data) => {
    state.posts.unshift(data);
  },
  filterTitleTextEdit: (state, data) => {
    state.filterTitleText = data;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
