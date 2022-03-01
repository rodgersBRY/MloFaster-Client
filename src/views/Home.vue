<template>
  <div class="home">
    <div class="add-hotel mt-7 d-flex justify-end mx-12" v-if="isAuthenticated">
      <new-hotel />
    </div>
    
    <!-- list of hotels -->
    <div class="main-content">
      <v-layout row wrap>
        <v-card
          width="500"
          class="my-3 mx-10"
          v-for="ht in hotels"
          :key="ht._id"
          @click="toHotel(ht._id)"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle class="font-weight-thin overline mb-4">
                {{ ht.phoneNo }}
              </v-list-item-subtitle>
              <v-list-item-subtitle
                class="font-weight-light text-subtitle-3 mb-4"
              >
                {{ ht.email }}
              </v-list-item-subtitle>
              <v-list-item-title class="font-weight-black headline mb-1">
                {{ ht.name }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="100"
              color="grey lighten-2 d-flex justify-center"
            >
              <img :src="ht.imageUrl" alt="profile image" />
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-layout>

    </div>

    <!-- footer -->
    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",

  components: {
    "new-hotel": require("../components/forms/New-hotel.vue").default,
  },

  computed: {
    ...mapGetters(["isAuthenticated", "hotels"]),
  },

  methods: {
    toHotel(id) {
      this.$router.push({ name: "Hotel", params: { Hid: id } });
    },
  },
};
</script>

<style lang="sass">
.main-content
  padding: 3rem 5rem
</style>
