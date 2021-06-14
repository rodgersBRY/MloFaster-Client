import Axios from "axios"

export default {
    state: {
        menuItems: []
    },

    mutations: {
        setMenuItems(state, payload) {
            state.menuItems = payload
        },

        createMenuItem(state, payload) {
            state.menuItems.push(payload)
        },

        clearMenuItems(state) {
            state.menuItems = []
        }
    },

    actions: {
        async loadMenuItems({ commit }) {
            try {
                const items = await Axios.get('/menu-items')
                console.log(items.data.menuItems)
                commit('setMenuItems', items.data.menuItems)
            } catch(err) {
                commit('setError', err.response.data)
            }
        },

        async createMenuItem({ commit }, payload) {
            const hotelId = payload.id
            
            try {
                const menuItem = await Axios.post(`/menu-items/add/${hotelId}`, payload)
                commit('createMenuItem', menuItem.data.menuItem)
            } catch(err) {
                commit('setError', err)
            }
        }
    },

    getters: {
        items: state => state.menuItems
    }
}