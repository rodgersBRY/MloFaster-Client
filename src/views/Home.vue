<template>
  <div class="home">
    <div class="add-hotel mt-7 d-flex justify-end mx-12" v-if="isAuthenticated">
      <new-hotel />
    </div>
    <!-- list of hotels -->
    <v-layout row wrap class="main-content">
      <v-card
        width="400"
        class="my-3 mx-10"
        v-for="ht in hotels"
        :key="ht._id"
        @click="toHotel(ht._id)"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{ ht.email }} / {{ ht.phoneNo }}</div>
            <v-list-item-title class="headline mb-1">
              {{ ht.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ ht.desc }}
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="100"
            color="grey lighten-2 d-flex justify-center"
          >
            <i class="bx bx-hotel bx-md"></i>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-layout>

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
