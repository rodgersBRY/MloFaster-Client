import Axios from "axios";

export default {
  state: {
    hotels: [],
  },

  actions: {
    async loadHotels({ commit }) {
      const hotels = await Axios.get("/hotels");
      commit("setHotels", hotels.data.hotels);
    },

    async createHotel({ commit }, payload) {
      try {
        commit("setLoading", true);

        const res = await Axios.post("/hotels/add", payload);
        
        commit("setLoading", false);
        commit("createHotel", res.data.hotel);
      } catch (e) {
        commit("setLoading", false);
        commit("setError", e);
      }
    },
  },

  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels;
    },

    createHotel(state, hotel) {
      state.hotels.push(hotel);
    },
  },

  getters: {
    hotels: (state) => state.hotels,
  },
};
