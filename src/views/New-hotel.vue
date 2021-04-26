<template>
    <div class="new-hotel">
        <v-sheet width="50%" elevation="3" class="form">
            <h2>Register your hotel</h2>
            <div class="subtitle">Add your hotel details to get into MloFaster's Database</div>
            <div class="input-fields mt-5">
                <v-text-field type="text" label="Hotel Name" class="input" v-model="name" color="teal" />
                <v-text-field type="email" label="E-Mail" class="input" v-model="email" color="teal" />
                <v-text-field type="text" label="Business Number" class="input" v-model="phoneNo" color="teal" />
                <v-text-field type="text" label="Description" class="input" v-model="description" color="teal" />
            </div>
            <div class="actions">
                <v-spacer />
                <v-btn depressed dark right color="warning">Register</v-btn>
            </div>
        </v-sheet>

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
            description: ''
        }
    }
    
}
</script>

<style scoped>
.form {
    width: 50%;
    margin: 4rem auto;
    padding: 4rem;
}
</style>