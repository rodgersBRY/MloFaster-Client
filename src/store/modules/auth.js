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
        commit("setLoading", false);
        commit("setError", err);
      }
    },

    async Login({ commit }, User) {
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
        commit("setLoading", false);
      } catch (err) {
        commit("setError", err);
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
