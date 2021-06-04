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
        }
    },

    actions: {
        async loadedMenuItems({ commit }) {
            commit('setLoading', true)

            try {
                const items = await Axios.get('/menuItems')
                commit('setMenuItems', items.data.menuItems)
                commit('setLoading', false)
            } catch(err) {
                commit('setError', err.response.data)
                commit('setLoading', false)
            }
        }
    },

    getters: {
        items: state => state.menuItems
    }
}