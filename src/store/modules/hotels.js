import Axios from "axios"

export default {
    state: {
        hotels: []
    },

    actions: {
        async loadedHotels({ commit }) {
            commit('setLoading', true)
            const hotels = await Axios.get('/hotels')
            commit('setHotels', hotels.data.hotels)
        },

        async createHotel({ commit }, payload) {
            commit('setLoading', true)
            const res = await Axios.post('/hotels/add', payload)
            
            commit('createHotel', res.data.hotel)
            commit('setLoading', false)     
        }
    },

    mutations: {
        setHotels(state, payload) {
            state.hotels = payload
        },

        createHotel(state, payload) {
            state.hotels.push(payload)
        }
    },

    getters: {
        hotels: state => state.hotels
    }
}