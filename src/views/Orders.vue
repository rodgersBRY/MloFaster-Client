<template>
  <div class="orders">
    <v-sheet class="item-list pa-5">
      <v-list two-line>
        <v-list-item>
          <v-list-item-content>
            <h3 class="headline">Item</h3>
          </v-list-item-content>
          <v-list-item-content>
            <h3 class="headline">Quantity</h3>
          </v-list-item-content>
          <v-list-item-content>
            <h3 class="headline">Price <br> (Total per Order)</h3>
          </v-list-item-content>
          <v-list-item-content>
            <h3 class="headline">Date of Order</h3>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2" color="black" />

        <div v-for="(order, i) in orders" :key="i">
          <v-list-item v-for="ord in order.items" :key="ord._id">
            <v-list-item-content>
              <h3 class="subtitle grey--text">{{ ord.name }}</h3>
            </v-list-item-content>
            <v-list-item-content>
              <p class="subtitle grey--text">{{ ord.quantity }}</p>
            </v-list-item-content>
            <v-list-item-content>
              <p class="subtitle grey--text">Ksh. {{ ord.price }}</p>
            </v-list-item-content>
            <v-list-item-content>
              <p class="subtitle grey--text">
                {{ order.createdAt | convertDate }}
              </p>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
        </div>
      </v-list>
    </v-sheet>

    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import { mapGetters } from "vuex";

export default {
  filters: {
    convertDate(val) {
      return format(new Date(val), "PPpp");
    },
  },

  computed: {
    ...mapGetters(["orders"]),
  },

  created() {
    this.$store.dispatch("loadOrders");
  },
};
</script>

<style scoped>
.cart {
  background-color: rgb(201, 201, 201);
}

.item-list {
  width: 60%;
  margin: 4rem auto;
}
</style>
