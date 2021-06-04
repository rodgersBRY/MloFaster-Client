import Axios from "axios";

const state = {
  user: null,
  token: localStorage.getItem('token') || ''
};

const getters = {
    isAuthenticated: state => !!state.user,
    user: state => state.user
};

const actions = {
  async register({ dispatch }, payload) {
    await Axios.put("/auth/register", payload);

    let userForm = new FormData();
    userForm.append("name", payload.name);
    userForm.append("email", payload.email);
    userForm.append("phoneNo", payload.phoneNo);
    userForm.append("password", payload.password);
    userForm.append("status", payload.status);

    await dispatch("Login", userForm);
  },

  async Login({ commit }, User) {
    try {
      commit('setLoading', true)
      const user = await Axios.post("/auth/login", {
        'email': User.get('email'),
        'password': User.get('password')
      });
      let token = user.data.token
      localStorage.setItem('token', token)
      Axios.defaults.headers.common['Authorization'] = token
      await commit("setUser", user.data, token);

      commit('setLoading', false)
    } catch(err) {
      commit('setError', err.response.data)
      commit('setLoading', false)
    }
  },

  async Logout({ commit }) {
    commit("logout");
  },
};

const mutations = {
  setUser(state, user, token) {
    state.user = user;
    state.token = token
  },

  logout(state) {
    state.user = null
    state.token = ''
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
