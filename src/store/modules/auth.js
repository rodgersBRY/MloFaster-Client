import Axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },

  getters: {
    isAuthenticated: (state) => !!state.user,
    user: (state) => state.user,
  },

  actions: {
    // auto logout user
    setLogoutTimer({ commit }) {
      setTimeout(() => {
        commit("clearCart");
        commit("logout");
        localStorage.removeItem("token");
        delete Axios.defaults.headers.common["Authorization"];
      }, 3600 * 1000);
    },

    async register({ dispatch, commit }, payload) {
      try {
        commit("setLoading", true);
        await Axios.put("/auth/register", payload);

        let userForm = new FormData();
        userForm.append("name", payload.name);
        userForm.append("email", payload.email);
        userForm.append("phoneNo", payload.phoneNo);
        userForm.append("password", payload.password);
        userForm.append("status", payload.status);

        await dispatch("Login", userForm);
        commit("setError", null);
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err.response.data.message);
        commit("setLoading", false);
      }
    },

    async Login({ commit, dispatch }, User) {
      try {
        commit("setLoading", true);
        const user = await Axios.post("/auth/login", {
          email: User.get("email"),
          password: User.get("password"),
        });

        let token = user.data.token;
        localStorage.setItem("token", token);
        Axios.defaults.headers.common["Authorization"] = token;

        commit("setUser", user.data, token);
        commit("setError", null);
        dispatch("setLogoutTimer");
        commit("setLoading", false);
      } catch (err) {
        let error = err.response.data.message;
        commit("setError", error);
        commit("setLoading", false);
        localStorage.removeItem("token");
      }
    },

    async Logout({ commit }) {
      commit("clearCart");
      commit("logout");
      localStorage.removeItem("token");
      delete Axios.defaults.headers.common["Authorization"];
    },
  },

  mutations: {
    setUser(state, user, token) {
      state.user = user;
      state.token = token;
    },

    logout(state) {
      state.user = null;
      state.token = "";
      state.error = null;
    },
  },
};
