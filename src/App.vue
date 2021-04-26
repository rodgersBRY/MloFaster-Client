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
            <span>Your Profile</span>
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
        <ul class="nav-links">
          <li class="nav-link"><a href="">About Us</a></li>
        
          <li class="nav-link"><a href="">Log In</a></li>
          <li class="nav-link"><a href="">Register</a></li>
          <li class="nav-link"><a href="">Logout</a></li>
        </ul>
      </v-app-bar>
    </div>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {

    }
  }
}
</script>

<style scoped>
.app-bar {
  position: fixed;
  z-index: auto;
}

.logo {
  position: relative;
  top: 1rem;
}

.logo-img {
  cursor: pointer;
}

.nav-links {
  list-style-type: none;
}

.nav-link {
  display: inline-block;
  margin: 0 1rem;
}

.nav-link a {
  color: white;
  text-decoration: none;
}

.nav-link a:hover,
.nav-link a.active {
  color: rgb(83, 83, 204);
}
</style>
