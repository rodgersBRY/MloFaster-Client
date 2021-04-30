<template>
    <div class="new-hotel">
        <v-btn color="teal" dark @click="dialog = true">
            <i class="bx bx-plus bx-sm"></i>
            New Hotel
        </v-btn>
        <v-dialog v-model="dialog" width="500" persistent>
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
                    <v-text-field type="text" dense label="Hotel Name" class="input" v-model="name" color="teal" />
                    <v-text-field type="email" dense label="E-Mail" class="input" v-model="email" color="teal" placeholder="hotel@example.com" />
                    <v-text-field type="text" dense label="Business Number" class="input" v-model="phoneNo" color="teal" placeholder="0712345678" />
                    <v-textarea no-resize type="text" dense label="Description" class="input" v-model="description" color="teal" />
                </div>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="warning" text>submit</v-btn>
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
    border: 1px solid teal;
    border-radius: 5px;
    padding: 1rem;
}
</style>