<template>
  <v-app>
    <div class="nav-bar">
      <v-app-bar dark color="teal" class="app-bar">
        <div class="logo" @click="$router.push('/')">
          <v-img width="170" class="logo-img" :src="require('@/assets/logo1.png')"></v-img>
        </div>
        <v-spacer />
        <div class="cart">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-avatar size="50" color="grey" class="mr-3" v-on="on" v-bind="attrs">
                <v-img :src="require('@/assets/profile-pic.jpg')"></v-img>
              </v-avatar>
            </template>
            <span>{{ name }}</span>
          </v-tooltip>
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
              <v-btn icon dark class="mr-3" v-bind="attrs" v-on="on" to="/orders">
                <i class="bx bxs-basket bx-sm"></i>
              </v-btn>
            </template>
            <span>Orders</span>
          </v-tooltip>
        </div>
        <v-spacer />

        <!-- router link navigates without refreshing the pages -->
        <router-link tag="li" class="nav-link" active-class="active" to="/about">About Us</router-link> |

        <!-- href="javascript:void(0)" -->
        <span v-if="isLoggedIn">
          <a class="nav-link" @click="logout">Logout</a>
        </span>
        <span v-else>
          <router-link tag="li" class="nav-link" active-class="active" to="/login">Login</router-link> |
        <router-link tag="li" class="nav-link" active-class="active" to="/register">Register</router-link>
        </span>
      </v-app-bar>
    </div>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  created() {
    let userData = this.$store.getters.user
    this.name = userData.user.name
  },

  data() {
    return {
      name: ''
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch('Logout')
      this.$router.push('/login')
    }
  }
}
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
