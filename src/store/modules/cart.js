import axios from "axios"

export default {
    state: {
        cartItems: []
    },

    mutations: {
        setCartItems(state, payload) {
            state.cartItems = payload
        },

        addCartItem(state, payload) {
            state.cartItems.push(payload)
        },

        updateCartItems(state, payload) {
            state.cartItems = payload
        },

        clearCart(state) {
            state.cartItems = []
        }
    },

    actions: {
        async loadCartItems({ commit }) {
            const res = await axios.get('/cart')
            const items = res.data.cartItems
            console.log(items)
            commit('setCartItems', items)
        },

        async addItemToCart({ commit, dispatch }, payload) {
            const itemId = payload

            const res = await axios.post(`/cart/add/${itemId}`)
            const items = res.data.cart.items
            console.log(items)
            commit('addCartItem', items)
        },

        async removeCartItem({ commit }, cartItem) {
            const res = await axios.delete('', cartItem)
            commit('updateCartItems', res.data)
        },
    },

    getters: {
        cartItems: state => state.cartItems
    }
}