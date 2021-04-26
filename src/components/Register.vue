<template>
    <div class="register">
        <v-dialog persistent max-width="600" v-model="dialog">
            <v-card>
                <v-card-title class="headline">Sign Up</v-card-title>
                <v-card-text>Create an account to enjoy the Services</v-card-text>
                <div class="form">
                    <v-text-field label="Name" dense v-model="name" color="teal" />
                    <v-text-field label="Phone Number" dense v-model="phoneNo" color="teal" />
                    <v-text-field label="E-Mail" type="email" dense v-model="email" color="teal" />
                    <v-select :items="roles" label="Status" dense v-model="status" color="teal"></v-select>
                    <v-text-field label="Password" type="password" dense v-model="password" color="teal" />
                    <v-text-field label="Confirm Password" type="password" dense v-model="confirmPass" color="teal" />
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
            dialog: true,
            name: '',
            email: '',
            phoneNo: '',
            password: '',
            status: '',
            confirmPass: '',

            roles: ['Administrator', 'Client/Customer']
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