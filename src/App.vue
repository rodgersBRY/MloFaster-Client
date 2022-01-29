<template>
  <v-app>
    <div class="nav-bar">
      <v-app-bar dark color="teal" class="app-bar">
        <div class="logo" @click="$router.push('/')">
          <v-img
            width="170"
            class="logo-img"
            :src="require('@/assets/logo1.png')"
          ></v-img>
        </div>
        <v-spacer />
        <div class="cart">
          <v-avatar
            size="55"
            color="warning"
            class="mr-16"
          >
          <v-icon>mdi-account</v-icon>
            <!-- <v-img :src="require('@/assets/profile-pic.jpg')"></v-img> -->
          </v-avatar>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon dark class="mr-3" v-bind="attrs" v-on="on" to="/cart">
                <i class="bx bxs-cart bx-sm"></i>
              </v-btn>
            </template>
            <span>Cart</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon dark class="mr-3" v-bind="attrs" v-on="on">
                <i class="bx bxs-bell bx-sm"></i>
              </v-btn>
            </template>
            <span>Notifications</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                dark
                class="mr-3"
                v-bind="attrs"
                v-on="on"
                to="/orders"
              >
                <i class="bx bxs-basket bx-sm"></i>
              </v-btn>
            </template>
            <span>Orders</span>
          </v-tooltip>
        </div>
        <v-spacer />

        <!-- router link navigates without refreshing the pages -->
        <router-link tag="li" class="nav-link" active-class="active" to="/about"
          >About Us</router-link
        >
        |

        <!-- href="javascript:void(0)" -->
        <span v-if="isAuthenticated">
          <a class="nav-link" @click="logout">Logout</a>
        </span>
        <span v-else>
          <router-link
            tag="li"
            class="nav-link"
            active-class="active"
            to="/login"
            >Login</router-link
          >
          |
          <router-link
            tag="li"
            class="nav-link"
            active-class="active"
            to="/register"
            >Register</router-link
          >
        </span>
      </v-app-bar>
    </div>
    <router-view />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",

  created() {
    return this.$store.dispatch("loadCartItems");
  },

  computed: {
    ...mapGetters(["isAuthenticated"]),
  },

  methods: {
    ...mapActions(["Logout"]),

    async logout() {
      await this.Logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.app-bar {
  position: relative;
  z-index: 5;
}

.logo {
  position: relative;
  top: 1rem;
}

.logo-img {
  cursor: pointer;
}

.nav-link {
  list-style-type: none;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  color: white;
  cursor: pointer;
  margin: 0 1rem;
}

.nav-link:hover,
.nav-link.active {
  color: rgb(83, 83, 204);
}
</style>
