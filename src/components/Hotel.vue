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
                            <v-icon color="white" class="mr-3">mdi-map-marker</v-icon>
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
                        <div class="add-hotel" v-if="isLoggedIn">
                            <new-menu-item />
                        </div>
                    </div>
                    <div
                    class="list-item d-flex justify-space-between align-center mb-5"
                    v-for="item in menuItems"
                    :key="item.id">
                        <v-avatar tile size="100" color="teal">
                            <v-img :src="item.img" />
                        </v-avatar>     
                        <div class="subtitle">
                            <p class="subtitle">{{ item.title }}</p>
                        </div>
                        <div>
                            <p>Ksh. {{ item.price }}</p>
                            <div class="d-flex align-center">
                                <v-btn icon color="warning">
                                    <i class="bx bx-minus bx-sm"></i>    
                                </v-btn>
                                <div class="mx-3">
                                    {{ item.quantity }}
                                </div>
                                <v-btn icon color="warning">
                                    <i class="bx bx-plus bx-sm"></i>
                                </v-btn>
                                <v-btn icon color="success" disabled>
                                    <i class="bx bx-check bx-sm"></i>
                                </v-btn>
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

            quantity: 0,
            disabled: true,

            menuItems: [
                {id: 1, img: require('../assets/images/beans.jpg'), title: 'Chapo Beans', price: '50', quantity: 0 },
                {id: 2, img: require('../assets/images/avocado.jpg'), title: 'Fries', price: '80', quantity: 0 },
                {id: 3, img: require('../assets/images/kebab.jpg'), title: 'Rice Beef', price: '80', quantity: 0 },
                {id: 4, img: require('../assets/images/peas.jpg'), title: 'Rice Ndengu', price: '50', quantity: 0 },
                {id: 5, img: require('../assets/images/Ugali.jpg'), title: 'Viazi Karai', price: '10', quantity: 0 },
            ]
        }
    },

    computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    },

    hotels() {
        return this.$store.getters.hotels
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