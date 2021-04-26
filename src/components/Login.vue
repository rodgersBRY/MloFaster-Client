<template>
    <div class="login">
        <v-dialog persistent max-width="600" v-model="dialog">
            <v-card>
                <v-card-title class="headline">Login</v-card-title>
                <v-card-text>Enter your Email and Passowrd to get to your account</v-card-text>
                <div class="form">
                    <v-text-field label="E-Mail" v-model="email" color="teal" />
                    <v-text-field label="Password" v-model="password" color="teal" />
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    color="teal darken-1"
                    text
                    @click="dialog = false">
                    Submit
                    </v-btn>
                    <v-btn
                    color="red darken-1"
                    text
                    @click="dialog = false">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            email: '',
            password: ''
        }
    }
}

</script>

<style scoped>
.form {
    width: 80%;
    margin: 1rem auto;

}
</style>