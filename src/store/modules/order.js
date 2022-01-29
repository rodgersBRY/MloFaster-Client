import axios from "axios";

export default {
  state: {
    orders: [],
  },
  getters: {
    orders: (state) => state.orders,
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },

    addToOrders(state, payload) {
      state.orders.push(payload);
    },

    clearOrders(state) {
      state.orders = [];
    },
  },
  actions: {
    loadOrders({ commit }) {
      const res = axios.get("/orders");
      console.log(res.data);
    },
  },
};
