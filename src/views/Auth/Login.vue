<template>
  <div class="login">
    <div class="card">
      <form @submit.prevent="submit">
        <v-card class="form">
          <v-card-title class="headline">Login</v-card-title>
          <v-card-text
            >Enter your Email and Password to get to your account</v-card-text
          >
          <div>
            <v-text-field
              label="E-Mail"
              type="email"
              v-model="form.email"
              color="teal"
            />
            <v-text-field
              label="Password"
              type="password"
              v-model="form.password"
              color="teal"
            />
          </div>
          <v-card-actions>
            <div class="error--text" v-show="getError != null">
              Check your details or register
            </div>
            <v-spacer />
            <v-btn
              color="teal darken-1"
              text
              type="submit"
              :disabled="isLoading"
            >
              Submit
            </v-btn>
          </v-card-actions>
          <!-- <p v-if="showError" class="warning--text pa-4">
            Username or Password is incorrect!
          </p> -->
        </v-card>
      </form>
    </div>

    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapGetters(["user", "isLoading", "getError"]),
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    },
  },

  methods: {
    ...mapActions(["Login", "loadCartItems"]),

    async submit() {
      if (this.form.email != "" && this.form.password != "") {
        const User = new FormData();
        User.append("email", this.form.email);
        User.append("password", this.form.password);
        try {
          await this.Login(User);
          this.loadCartItems;
        } catch (err) {
          alert(err);
        }
      } else {
        alert("Please input your Email and Password");
      }
    },
  },
};
</script>

<style scoped>
.form {
  width: 40%;
  margin: auto;
  padding: 0 2rem;
}

.card {
  padding: 5rem 0;
}

.alert {
  width: 40%;
  padding: 2rem;
  margin: auto;
}
</style>
