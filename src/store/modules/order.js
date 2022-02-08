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
    async loadOrders({ commit }) {
      commit("setLoading", true);
      try {
        const res = await axios.get("/orders");
        console.log(`your response is ${res.data.orders}`);

        if (res != null) {
          commit("setOrders", res.data.orders);
          commit("setError", null);
          commit("setLoading", false);
        } else {
          console.log("no orders found for this user");
        }
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },
    async makeOrder({ commit, dispatch }) {
      commit("setLoading", true);
      try {
        const res = await axios.post("/orders/order");
        console.log(res);

        commit("addToOrder", res);
        commit("setLoading", false);
        dispatch("loadOrders");
        commit("setError", null);
      } catch (err) {
        commit("setError", err);
        commit("setLoading", false);
      }
    },
  },
};
