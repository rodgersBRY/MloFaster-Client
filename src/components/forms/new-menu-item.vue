<template>
    <div class="new-hotel">
        <v-btn color="teal" dark @click="dialog = true">
            <i class="bx bx-plus bx-sm"></i>
            New Menu Item
        </v-btn>
        <v-dialog v-model="dialog" width="500" persistent>
            <form @submit.prevent="submit">
                <v-card class="pa-8">
                    <div class="mb-5 d-flex justify-space-between">
                        <h2>Add New Menu Item</h2>
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
                        <p>Enter new menu item to your hotel</p>
                    </div>
                    <div class="form mb-3">
                        <v-text-field type="text" dense label="Item Name" class="input" v-model="form.name" color="teal" />
                        <v-text-field type="text" dense label="Item Price" class="input" v-model="form.price" color="teal" />
                        <v-textarea no-resize type="text" dense label="Description" class="input" v-model="form.desc" color="teal" />
                    </div>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn color="warning" text type="submit">submit</v-btn>
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
                desc: '',
                price: ''
            }
        }
    },

    methods: {
        ...mapActions(['']),

        async submit() {
            
            
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