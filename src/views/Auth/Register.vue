<template>
    <div class="register">
        <v-card class="form">
            <v-card-title class="headline">Sign Up</v-card-title>
            <v-card-text>Create an account to enjoy the Services</v-card-text>
            <div>
                <v-text-field label="Name" dense v-model="name" color="teal" />
                <v-text-field label="Phone Number" dense v-model="phoneNo" color="teal" />
                <v-text-field label="E-Mail" type="email" dense v-model="email" color="teal" />
                <v-select :items="roles" label="Status" dense v-model="status" color="teal"></v-select>
                <v-text-field label="Password" type="password" dense v-model="password" color="teal" />
                <v-text-field label="Confirm Password" type="password" v-model="confirmPass" color="teal" :rules="[comparePasswords]" />
            </div>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="teal darken-1"
                text
                @click="register">
                Submit
                </v-btn>
            </v-card-actions>
        </v-card>

        <div class="footer">
            <app-footer />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phoneNo: '',
            password: '',
            status: '',
            confirmPass: '',

            roles: ['admin', 'client']
        }
    },

    computed: {
        comparePasswords() {
            return this.password !== this.confirmPass ? 'Passwords do not match' : ''
        },
    },

    methods: {
        register() {
            let data = {
                name: this.name,
                email: this.email,
                phoneNo: this.phoneNo,
                password: this.password,
                status: this.status
            }
            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/login'))
                .catch(err => console.log(err))
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