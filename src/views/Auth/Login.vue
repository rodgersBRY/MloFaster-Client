<template>
    <div class="login">
        <div class="card">
            <v-alert 
            class="alert" 
            dense 
            height="30" 
            outlined
            v-if="error"
            type="error" 
            dismissible>
                {{ error.message }}
            </v-alert>
            <v-card class="form">
                <v-card-title class="headline">Login</v-card-title>
                <v-card-text>Enter your Email and Password to get to your account</v-card-text>
                <div>
                    <v-text-field label="E-Mail" type="email" v-model="email" color="teal" />
                    <v-text-field label="Password" type="password" v-model="password" color="teal" />
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="teal darken-1"
                    text
                    @click="login"
                    :disabled="loading"
                    :loading="loading">
                    Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

        <div class="footer">
            <app-footer />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    computed: {
        user() {
            return this.$store.getters.token
        },
        error() {
            return this.$store.getters.error
        },
        loading() {
            return this.$store.getters.loading
        }
    },

    watch: {
        user(value) {
            if(value !== null) {
                this.$router.push('/')
            }
        }
    },

    methods: {
        login() {
            this.$store.dispatch('login', { email: this.email, password: this.password })
        },
        onDismissed() {
            this.$store.dispatch('clearError')
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