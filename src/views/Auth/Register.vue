<template>
  <div class="register">
    <form @submit.prevent="submit">
      <v-card class="form">
        <v-card-title class="headline">Sign Up</v-card-title>
        <v-card-text>Create an account to enjoy the Services</v-card-text>
        <div>
          <v-text-field label="Name" dense v-model="form.name" color="teal" />
          <v-text-field
            label="Phone Number"
            dense
            v-model="form.phoneNo"
            color="teal"
          />
          <v-text-field
            label="E-Mail"
            type="email"
            dense
            v-model="form.email"
            color="teal"
          />
          <v-select
            :items="roles"
            label="Status"
            dense
            v-model="form.status"
            color="teal"
          ></v-select>
          <v-text-field
            label="Password"
            type="password"
            dense
            v-model="form.password"
            color="teal"
          />
          <v-text-field
            label="Confirm Password"
            type="password"
            v-model="form.confirmPass"
            color="teal"
          />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="teal darken-1" text type="submit">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </form>

    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phoneNo: '',
                password: '',
                status: '',
                confirmPass: '',
            },
            roles: ['admin', 'client'],
            showError: false
        }
    },

    methods: {
        ...mapActions(['register']),

        async submit() {
            try {
                await this.register(this.form)
                this.$router.push('/')
                this.showError = false
            } catch(err) {
                this.showError = true
            }
        }
    }


}
</script>

<style scoped>
.form {
  width: 40%;
  margin: 4rem auto;
  padding: 0 2rem;
}
</style>
