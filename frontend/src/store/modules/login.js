import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        user: {
            name: 'John Doe',
            type: "client"
        },
        loginRequest: {
            email: '',
            password: '',
        },
    },
    getters: {
        getField,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        updateField,
    },
    actions: {
        login({ commit, state }) {
            console.log(state.loginRequest)
            axios.post('/login', state.loginRequest).then(response => {
                commit('setUser', response.data)
                router.push({ name: 'Home' })
            })
        }
    },
}