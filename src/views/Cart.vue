<template>
    <div class="cart">
        <v-sheet class="item-list pa-5" elevation="3">
            <v-list three-line>
                <v-list-item>
                    <v-list-item-content>
                        <h3 class="headline">Item</h3>
                    </v-list-item-content>
                    <v-list-item-content>
                        <h3 class="headline">Price</h3>
                    </v-list-item-content>
                    <v-list-item-content>
                        <h3 class="headline">Quantity</h3>
                    </v-list-item-content>
                </v-list-item>
                <v-divider class="mt-2" />

                <v-list-item class="mt-2" v-for="item in cartItems" :key="item._id">
                    <v-list-item-content>
                        <v-list-item-subtitle>Hotel: </v-list-item-subtitle>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                    </v-list-item-content>
                    <v-spacer />
                    <v-list-item-content>
                        <v-list-item-title>Ksh. {{ item.price }}</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.quantity }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <div>{{ cartItems }}</div>

            <div class="actions d-flex justify-end">

                <v-btn depressed dark class="mr-4" color="teal" @click="makeOrder">Checkout & Order</v-btn>
                <v-btn depressed dark color="warning">Clear Cart</v-btn>
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
            // cartItems: [
            //     {name: 'Ugali & Sukuma', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '80', quantity: '2'},
            //     {name: 'Chips Masala', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '200', quantity: '1'},
            //     {name: 'Chicken Burger', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '300', quantity: '2'},
            //     {name: 'Chips', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '100', quantity: '3'},
            //     {name: 'Bhajia', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '130', quantity: '1'},
            //     {name: 'Special', desc: 'Fries, 1/4 Chicken & Soda', price: '250', quantity: '1'}
            // ]
        }
    },

    created() {
        return this.$store.dispatch('loadCartItems')
    },

    computed: {
        cartItems() {
            return this.$store.getters.cartItems
        }
    },

    methods: {
        makeOrder() {
            this.$router.push('/orders')
        }
    }
}
</script>

<style scoped>
.item-list {
    width: 60%;
    margin: 4rem auto;
}
</style>