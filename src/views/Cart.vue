<template>
  <div class="cart">
    <v-sheet class="item-list pa-5" elevation="3">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <h3 class="headline">Item</h3>
          </v-list-item-content>
          <v-list-item-content>
            <h3 class="headline">Price</h3>
          </v-list-item-content>
          <v-list-item-content>
            <h3 class="headline">Quantity</h3>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2" />

        <v-list-item class="mt-2" v-for="item in cartItems" :key="item._id">
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>{{ item.quantity }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title>Ksh. {{ item.price }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <div class="actions d-flex justify-end mt-10">
        <v-btn depressed dark class="mr-4" color="teal" @click="makeOrder"
          >Checkout & Order</v-btn
        >
        <v-btn depressed dark color="warning">Clear Cart</v-btn>
      </div>
    </v-sheet>

    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartItems"]),
  },

  methods: {
    makeOrder() {
      this.$router.push("/orders");
    },
  },
};
</script>

<style scoped>
.item-list {
  width: 60%;
  margin: 4rem auto;
}
</style>
