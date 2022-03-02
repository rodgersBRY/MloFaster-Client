import Axios from "axios";

export default {
  mutations: {
    setMenuItems(state, payload) {
      state.menuItems = payload;
    },
  },

  actions: {
    async loadMenuItems({ commit }) {
      try {
        const items = await Axios.get("/hotels/menu-items");
        commit("setMenuItems", items.data.menuItems);
        commit("setError", null);
      } catch (err) {
        commit("setError", err.response.data.message);
      }
    },
  },

  getters: {
    menuItems: (state) => state.menuItems,
  },
};
