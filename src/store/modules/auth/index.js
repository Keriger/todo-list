const state = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  isAuthenticated: localStorage.getItem("user") ? true : false,
};

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  user: (state) => state.user,
};

const actions = {
  async login({ commit }, { username, phone }) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    let result = await response.json();
    const currentUser = result.find(
      (item) => item.username == username && item.phone == phone
    );

    if (currentUser) {
      commit("login", currentUser);
    } else {
      throw true;
    }
  },
};
const mutations = {
  login: (state, data) => {
    state.user = data;
    localStorage.setItem("user", JSON.stringify(data));
    state.isAuthenticated = true;
  },
  logout: (state) => {
    state.user = null;
    localStorage.removeItem("user");
    state.isAuthenticated = false;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
