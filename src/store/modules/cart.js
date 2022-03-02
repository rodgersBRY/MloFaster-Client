import axios from "axios";

export default {
  state: {
    cartItems: [],
  },

  mutations: {
    setCartItems(state, payload) {
      state.cartItems = payload;
    },

    addCartItem(state, payload) {
      state.cartItems.push(payload);
    },

    updateCartItems(state, payload) {
      state.cartItems = payload;
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },

  actions: {
    async loadCartItems({ commit }) {
      const res = await axios.get("/user/cart");
      const items = res.data.cartItems;
      commit("setCartItems", items);
    },

    async addItemToCart({ commit, dispatch }, payload) {
      const itemId = payload;

      try {
        const res = await axios.post(`/user/cart/add/${itemId}`);
        const items = res.data.cart.items;
        commit("addCartItem", items);
        commit("clearError");
        dispatch("loadCartItems");
      } catch (err) {
        let error = err.error.data.message;
        commit("setError", error);
      }
    },

    async removeCartItem({ commit }, cartItem) {
      const itemId = cartItem;
      const res = await axios.delete(`/user/cart/${itemId}`);
      commit("updateCartItems", res.data.cartItems);
    },

    async clearCart({ commit }) {
      commit("setLoading", true);

      const res = await axios.post("/user/cart/clear");
      commit("clearCart");
      commit("setLoading", false);
    },
  },

  getters: {
    cartItems: (state) => state.cartItems,
  },
};
