import Axios from "axios";

export default {
  state: {
    menuItems: [],
  },

  mutations: {
    setMenuItems(state, payload) {
      state.menuItems = payload;
    },

    createMenuItem(state, payload) {
      state.menuItems.push(payload);
    },

    clearMenuItems(state) {
      state.menuItems = [];
    },
  },

  actions: {
    async loadMenuItems({ commit }) {
      try {
        const items = await Axios.get("/menu-items");
        commit("setMenuItems", items.data.menuItems);
        commit("setError", null);
      } catch (err) {
        commit("setError", err.response.data.message);
      }
    },

    async createMenuItem({ commit }, payload) {
      const hotelId = payload.id;

      try {
        const menuItem = await Axios.post(
          `/menu-items/add/${hotelId}`,
          payload
        );
        commit("createMenuItem", menuItem.data.menuItem);
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
