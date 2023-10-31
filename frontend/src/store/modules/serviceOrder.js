import { getField, updateField } from 'vuex-map-fields';
import axios from '../../config/axios'
import router from '@/router'

export default {
    namespaced: true,
    state: {
        items: [],
        newServiceOrder: {
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
        createServiceOrder({ commit, state }) {
            axios.post('/serviceOrder', state.newQuote).then(response => {
                router.push({ name: 'Home' })
            }).catch(error => {
                console.log(error)
            })
        }
    },
}