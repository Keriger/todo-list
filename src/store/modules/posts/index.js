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
      let result = await response.json();
      commit("setPost", result);
    } catch (error) {
      console.log(error);
    }
  },
};
const mutations = {
  getPosts: (state, data) => {
    let favoritesPosts = [];
    if (localStorage.getItem("favorites-posts")) {
      favoritesPosts = JSON.parse(localStorage.getItem("favorites-posts"));
    }

    state.posts = data.map((item) => ({
      ...item,
      favorites: favoritesPosts.includes(item.id),
    }));
  },
  changeFavoriteStatus: (state, { id }) => {
    const currentPostIdx = state.posts.findIndex((item) => item.id == id);
    state.posts[currentPostIdx].favorites =
      !state.posts[currentPostIdx].favorites;
    let favoritesPosts = [];
    if (localStorage.getItem("favorites-posts")) {
      favoritesPosts = JSON.parse(localStorage.getItem("favorites-posts"));
    }
    if (favoritesPosts.includes(id)) {
      favoritesPosts = favoritesPosts.filter((item) => item != id);
    } else {
      favoritesPosts.push(id);
    }
    favoritesPosts = localStorage.setItem(
      "favorites-posts",
      JSON.stringify(favoritesPosts)
    );
  },
  setPost: (state, data) => {
    state.posts.push(data);
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
