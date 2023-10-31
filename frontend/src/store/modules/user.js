import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        items: [],
        newUser: {
            name: '',
            email: '',
            password: '',
            type: '',
            phoneNumber: '',
        }
    },
    getters: {
        getField,
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items
        },
        updateField,
    },
    actions: {
        createUser({ commit, state }) {
            axios.post('/users', state.newUser).then(response => {
                router.push({ name: 'Users' })
            }).catch(error => {
                console.log(error)
            })
        },
        getUsers({ commit, state }) {
            axios.get('/users').then(response => {
                commit('setItems', { items: response.data })
            }).catch(error => {
                console.log(error)
            })
        }
    },
}