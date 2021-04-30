import axios from 'axios'

export default {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },

  mutations: {
    setUser(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
  },

  actions: {
    async login({ commit }, payload) {
        commit('setLoading', true)
        commit('clearError')

        try {
            let resp = await axios.post('http://localhost:4000/auth/login', payload)
            console.log(resp.data.user)
            let token = resp.data.token
            let user = JSON.stringify(resp.data.user)
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('setLoading', false)
            commit('setUser', token, user)
        } catch(err) {
            commit('setLoading', false)
            localStorage.removeItem('token')
            commit('setError', err.response.data)
        }
    },

    register({ commit }, payload) {
        commit('setLoading', true)
        commit('clearerror')
        
        axios.put('http://localhost:4000/auth/register', payload)
            .then(resp => {
                console.log(resp)
                commit('setLoading', false)
            }).catch(err => {
                commit('setLoading', false)
                commit('setError', err.response.data)
            })
    },

    logout({ commit }) {
        commit('setUser', null)
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.user
  }
}
