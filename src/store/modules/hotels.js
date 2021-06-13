import Axios from "axios"

export default {
    state: {
        hotels: []
    },

    actions: {
        async loadHotels({ commit }) {
            const hotels = await Axios.get('/hotels')
            commit('setHotels', hotels.data.hotels)
        },

        async createHotel({ commit }, payload) {
            const res = await Axios.post('/hotels/add', payload)
            commit('createHotel', res.data.hotel)
        }
    },

    mutations: {
        setHotels(state, payload) {
            state.hotels = payload
        },

        clearHotels(state) {
            state.hotels = []
        },

        createHotel(state, payload) {
            state.hotels.push(payload)
        }
    },

    getters: {
        hotels: state => state.hotels
    }
}