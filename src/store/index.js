import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// load the modules
import auth from "./modules/auth";
import hotels from "./modules/hotels";
import shared from "./modules/shared";
import menuItems from "./modules/menuItem";
import cartItems from "./modules/cart";
import orders from "./modules/order";
import admin from "./modules/admin";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    auth,
    hotels,
    shared,
    menuItems,
    cartItems,
    orders,
    admin,
  },
  plugins: [createPersistedState()], // deal with Vuex resetting after refreshing
});
