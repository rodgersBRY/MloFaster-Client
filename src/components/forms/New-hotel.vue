<template>
    <div class="new-hotel">
        <v-btn color="teal" dark @click="dialog = true">
            <i class="bx bx-plus bx-sm"></i>
            New Hotel
        </v-btn>
        <v-dialog v-model="dialog" width="500" persistent>
            <!-- <v-flex>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex> -->
            <form @submit.prevent="submit" enctype="multipart/form-data">
                <v-card class="pa-8">
                    <div class="mb-5 d-flex justify-space-between">
                        <h2>Add New Hotel</h2>
                        <v-btn
                        class="x-btn"
                        color="red" 
                        icon 
                        dark 
                        @click="dialog = false">
                            <i class="bx bx-x bx-sm"></i>
                        </v-btn>
                    </div>
                    <div class="subtitle mb-5">
                        <p>Enter your hotel details for customers to view your hotel</p>
                    </div>
                    <div class="form mb-3">
                        <v-text-field type="text" dense label="Hotel Name" class="input" v-model="form.name" color="teal" />
                        <v-text-field type="email" dense label="E-Mail" class="input" v-model="form.email" color="teal" placeholder="hotel@example.com" />
                        <v-text-field type="text" dense label="Business Number" class="input" v-model="form.phoneNo" color="teal" placeholder="712345678" />
                        <!-- <input type="file" class="input mb-3" @change="onFileSelected" name="image" /> -->
                        <v-textarea no-resize type="text" dense label="Description" class="input" v-model="form.description" color="teal" />
                    </div>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                        color="warning"
                        text
                        type="submit">submit</v-btn>
                    </v-card-actions>
                </v-card>
            </form>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            dialog: false,
            form: {
                name: '',
                email: '',
                phoneNo: '',
                description: '',
            }
        }
    },

    methods: {
        ...mapActions(['createHotel']),

        async submit() {
            await this.createHotel(this.form)
            this.dialog = false
        }
    }
}
</script>

<style scoped>

.form {
    border: 1px solid teal;
    border-radius: 5px;
    padding: 1rem;
}

.alert {
    padding: 2rem;
    margin: auto;
}
</style>