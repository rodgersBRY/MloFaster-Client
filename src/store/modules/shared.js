export default {
  state: {
    error: null,
    loading: false,
  },

  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },

    setError(state, payload) {
      state.error = payload;
    },

    clearError(state) {
      state.error = null;
    },
  },

  getters: {
    isLoading(state) {
      return state.loading;
    },
  },
};
