<template>
    <div class="orders">
        <v-sheet class="item-list pa-5">
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

                <v-list-item class="mt-2" v-for="(item, i) in cartItems" :key="i">
                    <v-list-item-avatar tile size="100">
                        <v-img :src="require('@/assets/Ugali.jpg')"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-subtitle>Date: {{ getDate }}</v-list-item-subtitle>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.desc"></v-list-item-subtitle>
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
            cartItems: [
                {name: 'Ugali & Sukuma', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '80', quantity: '2'},
                {name: 'Chips Masala', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '200', quantity: '1'},
                {name: 'Chicken Burger', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '300', quantity: '2'},
                {name: 'Chips', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '100', quantity: '3'},
                {name: 'Bhajia', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', price: '130', quantity: '1'},
                {name: 'Special', desc: 'Fries, 1/4 Chicken & Soda', price: '250', quantity: '1'}
            ]
        }
    },

    compute: {
        getDate() {
            let d = new Date()
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            return d.toLocaleString('en-US', options)
        }
    }
}
</script>

<style scoped>
.cart {
    background-color: rgb(201, 201, 201);
}

.item-list {
    width: 60%;
    margin: 4rem auto;
}
</style>