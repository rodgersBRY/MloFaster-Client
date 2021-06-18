<template>
    <div class="hotel">
        <div
        class="details"
        v-for="i in hotels"
        :key="i._id">
            <div v-if="id === i._id">
                <div class="image">
                    <v-img
                    width="100%"
                    height="450"
                    :src="require('@/assets/ba.jpg')"
                    class="white--text pl-7 d-flex align-center justify-center">
                        <h1>{{ i.name }}</h1>
                        <div class="subtitle" style="width: 60%">{{ i.desc }}</div>
                        <div class="location" style="margin-top: 2rem">
                            <v-icon color="white" class="mr-3" size="40">mdi-card-account-mail</v-icon>
                            {{ i.email }} - {{ i.phoneNo }}
                        </div>
                    </v-img>
                </div>

                <div class="absolute">
                    <v-sheet
                    elevation="3"
                    width="350"
                    class="pa-3"
                    style="border-radius: 7px;">
                        <h3>Cart Items</h3>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="grey--text">
                                        Product
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content class="ml-10">
                                    <v-list-item-title class="grey--text">
                                        Price
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item v-for="item in cartItems" :key="item.id">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ item.title }}
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content class="ml-1">
                                    <v-list-item-subtitle>
                                        Ksh. {{ item.price }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-content>
                                    <v-btn text>
                                        <i class="bx bx-x bx-sm"></i>
                                    </v-btn>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>

                            <div class="mt-5 d-flex justify-end">
                                <v-btn color="warning" dark depressed>Checkout & Order</v-btn>
                            </div>
                        </v-list>
                    </v-sheet>
                </div>

                <div class="main-content">
                    <div class="d-flex justify-space-between mb-4" style="width: 60%">
                        <h2 class="mb-4">Menu Items</h2>
                        <div class="add-hotel" v-if="isAuthenticated">
                            <new-menu-item />
                        </div>
                    </div>
                    <div
                    v-for="item in menuItems"
                    :key="item._id">
                        <div 
                        class="list-item d-flex justify-space-between align-center mb-5"
                        v-if="id === item.hotelId">
                            <div class="subtitle">
                                <p class="subtitle">{{ item.name }}</p>
                            </div>
                            <div>
                                <p>Ksh. {{ item.price }}</p>
                                <div class="d-flex align-center">
                                    <v-btn outlined color="warning" @click="addToBag(item._id)">
                                        <i class="bx bxs-cart-alt bx-sm"></i>Add to Cart
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <app-footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NewMenuItem from './forms/new-menu-item'
import { mapActions, mapGetters } from 'vuex'

export default {
    components: {
        'new-menu-item': NewMenuItem
    },

    data() {
        return {
            id: this.$route.params.Hid,

            cartItems: [
                {id: 1, title: 'Fries', price: '40' },
                {id: 2, title: 'Beans Chapo', price: '70' },
                {id: 3, title: 'Viazi Karai', price: '50' },
                {id: 4, title: 'Rice Ndengu', price: '100' },
                {id: 5, title: 'RIce Beef', price: '90' }
            ],

            disabled: true,
        }
    },

    computed: {
        ...mapGetters(['isAuthenticated', 'hotels', 'menuItems']),
    },

    methods: {
        ...mapActions(['addItemToCart']),

        async addToBag(itemId) {
            console.log(itemId)
            await this.addItemToCart(itemId)
        }
    }
}
</script>

<style scoped>
.absolute {
    position: absolute;
    top: 25%;
    right: 10%;
}

.main-content {
    margin: 3rem;
}

.list-item {
    width: 60%;
}
</style>