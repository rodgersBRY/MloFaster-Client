import Axios from "axios";

export default {
  actions: {
    async loadHotels({ commit }) {
      const hotels = await Axios.get("/hotels");
      commit("setHotels", hotels.data.hotels);
    },
  },

  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels;
    },
  },

  getters: {
    hotels: (state) => state.hotels,
  },
};
