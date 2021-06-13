<template>
    <div class="login">
        <div class="card">
            <!-- <v-alert 
            class="alert" 
            dense 
            height="30" 
            outlined
            v-if="showError"
            type="error"
            dismissible>
                {{ error.message }}
            </v-alert> -->

            <form @submit.prevent="submit">
                <v-card class="form">
                    <v-card-title class="headline">Login</v-card-title>
                    <v-card-text>Enter your Email and Password to get to your account</v-card-text>
                    <div>
                        <v-text-field label="E-Mail" type="email" v-model="form.email" color="teal" />
                        <v-text-field label="Password" type="password" v-model="form.password" color="teal" />
                    </div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="teal darken-1"
                        text
                        type="submit">
                        Submit
                        </v-btn>
                    </v-card-actions>
                    <p v-if="showError" class="warning--text pa-4">Username or Password is incorrect!</p>
                </v-card>
            </form>
        </div>

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
                email: '',
                password: ''
            },

            showError: false
        }
    },

    computed: {
        user() {
            return this.$store.getters.user
        },
    },

    watch: {
        user(value) {
            if(value !== null && value !== undefined) {
                this.$router.push('/')
            }
        }
    },

    methods: {
        ...mapActions(['Login']),

        async submit() {
            const User = new FormData()
            User.append('email', this.form.email)
            User.append('password', this.form.password)
            try {
                await this.Login(User)
                // this.$router.push('/')
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