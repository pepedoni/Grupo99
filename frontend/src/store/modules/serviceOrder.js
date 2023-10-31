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
        },
        order: {}
    },
    getters: {
        getField,
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items
        },
        setServiceOrder(state, payload) {
            state.order = payload.order
        },
        updateField,
    },
    actions: {
        approveQuote({ commit, dispatch, state }, payload) {
            axios.put(`/serviceOrder/approveQuote/${payload.id}`).then(response => {
                dispatch('getServiceOrder', {id: payload.id})
            }).catch(error => {
                console.log(error)
            })
        },
        createServiceOrder({ commit, state }) {
            axios.post('/serviceOrder', state.newServiceOrder).then(response => {
                router.push('/serviceOrder/' + response.data.id)
            }).catch(error => {
                console.log(error)
            })
        },
        getServiceOrder({ commit, state }, payload) {
            axios.get('/serviceOrder', {params: {id: payload.id}}).then(response => {
                commit('setServiceOrder', { order: response.data.serviceOrders[0] })
            }).catch(error => {
                console.log(error)
            })
        },
        refuseQuote({ commit, dispatch, state }, payload) {
            axios.put(`/serviceOrder/refuseQuote/${payload.id}`).then(response => {
                dispatch('getServiceOrder', {id: payload.id})
            }).catch(error => {
                console.log(error)
            })
        },
    },
}