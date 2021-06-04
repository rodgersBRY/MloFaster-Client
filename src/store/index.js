import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// load the modules
import auth from './modules/auth'
import hotels from './modules/hotels'
import shared from './modules/shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth,
    hotels,
    shared
  },
  plugins: [createPersistedState()] // deal with Vuex resetting after refreshing 
})