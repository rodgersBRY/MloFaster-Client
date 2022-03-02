import axios from "axios";

export default {
  state: {
    hotels: [],
    menuItems: [],
  },

  actions: {
    async createHotel({ commit }, payload) {
      try {
        commit("setLoading", true);
        const res = await axios.post("/admin/hotel/add", payload);

        commit("setLoading", false);
        commit("createHotel", res.data.hotel);
        commit("setError", null);
      } catch (e) {
        commit("setLoading", false);
        commit("setError", e.response.data.message);
      }
    },

    async deleteHotel({ commit, dispatch }, id) {
      commit("setLoading", true);

      try {
        await axios.delete(`/admin/hotel/${id}`);
        dispatch("loadHotels");
        commit("setLoading", false);
        commit("setError", null);
      } catch (e) {
        commit("setLoading", false);
        commit("setError", e.response.data.message);
      }
    },

    async editHotel({ commit }, payload) {
      const hotelId = payload.id;
      commit("setLoading", true);

      try {
        const res = await axios.put(`/admin/hotel/${hotelId}`, payload);
        commit("updateHotel", payload);
        commit("setLoading", false);
        commit("setError", null);
      } catch (e) {
        commit("setLoading", false);
        commit("setError", e.response.data.message);
      }
    },

    async createMenuItem({ commit }, payload) {
      const hotelId = payload.id;

      try {
        const menuItem = await axios.post(
          `/admin/hotels/${hotelId}/add-item`,
          payload
        );
        commit("createMenuItem", menuItem.data.menuItem);
        commit("setError", null);
      } catch (err) {
        commit("setError", err.response.data.message);
      }
    },
  },

  mutations: {
    createHotel(state, hotel) {
      state.hotels.push(hotel);
    },

    updateHotel(state, payload) {
      let hotel = state.hotels.filter((hotel) => hotel._id === payload.id)[0];
      hotel = payload;
    },

    createMenuItem(state, payload) {
      state.menuItems.push(payload);
    },

    clearMenuItems(state) {
      state.menuItems = [];
    },
  },
};
