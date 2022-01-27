<template>
  <div class="new-hotel">
    <v-btn color="teal" dark @click="dialog = true">
      <i class="bx bx-plus bx-sm"></i>
      New Hotel
    </v-btn>
    <v-dialog v-model="dialog" width="40%" persistent>
      <form @submit.prevent="submit" enctype="multipart/form-data">
        <v-card class="pa-7">
          <div class="mb-5 d-flex justify-space-between">
            <h2>Add New Hotel</h2>
            <v-btn class="x-btn" color="red" icon dark @click="dialog = false">
              <i class="bx bx-x bx-sm"></i>
            </v-btn>
          </div>
          <div class="subtitle mb-5">
            <p>Enter your hotel details for customers to view your hotel</p>
          </div>
          <v-card flat class="form mb-3 py-3" width="100%">
            <v-text-field
              type="text"
              dense
              label="Hotel Name"
              class="input"
              v-model="form.name"
              color="teal"
            />
            <v-text-field
              type="email"
              dense
              label="E-Mail"
              class="input"
              v-model="form.email"
              color="teal"
              placeholder="hotel@example.com"
            />
            <v-text-field
              type="text"
              dense
              label="Business Number"
              class="input"
              v-model="form.phoneNo"
              color="teal"
              placeholder="0712345678"
            />
            <!-- <input type="file" class="input mb-3" @change="onFileSelected" name="image" /> -->
          </v-card>
          <v-card-actions>
            <v-spacer />
            <v-btn color="warning" text type="submit" :disabled="isLoading"
              >submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      form: {
        name: "",
        email: "",
        phoneNo: "",
      },
    };
  },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },

  methods: {
    ...mapActions(["createHotel"]),

    async submit() {
      await this.createHotel(this.form);
      this.form = {
        name: "",
        email: "",
        phoneNo: "",
      };
      this.dialog = false;
    },
  },
};
</script>

<style lang="sass"></style>
