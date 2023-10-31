import { getField, updateField } from 'vuex-map-fields';
import axios from '../../config/axios'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        items: [],
        newQuote: {
            device: '',
            problemDescription: ''
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
        createQuote({ commit, state }) {
            axios.post('/quote', state.newQuote).then(response => {
                router.push({ name: 'UserQuotes' })
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