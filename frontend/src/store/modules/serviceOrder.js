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
        newQuote: {
            value: 0.00,
            hoursExpected: 0
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
            axios.patch(`/serviceOrder/${payload.id}`, {id: payload.id, status: "repairing"}).then(response => {
                payload.status = "repairing"
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
        getServiceOrders({commit, state}) {
            axios.get('/serviceOrder').then(response => {
                commit('setItems', { items: response.data.serviceOrders })
            }).catch(error => {
                console.log(error)
            })
        },
        getServiceOrdersPendingQuotes({commit, state}) {
            axios.get('/serviceOrder?status=waitingQuote').then(response => {
                commit('setItems', { items: response.data.serviceOrders })
            }).catch(error => {
                console.log(error)
            })
        },
        refuseQuote({ commit, dispatch, state }, payload) {
            payload.status = "refused"
            axios.patch(`/serviceOrder/${payload.id}`, {id: payload.id, status: "refused"}).then(response => {
                dispatch('getServiceOrder', {id: payload.id})
            }).catch(error => {
                console.log(error)
            })
        }, 
        createQuote({ commit, state }, payload) {
            axios.post('/quote', { serviceOrderId: payload.id, ...state.newQuote}).then(response => {
                router.push('/pendingQuotes')
            }).catch(error => {
                console.log(error)
            })
        },
        getServiceOrdersByEmployee({commit}) {
            axios.get('/serviceOrder/employee').then(response => {
                commit('setItems', { items: response.data.serviceOrders })
            }).catch(error => {
                console.log(error)
            })
        },
        updateStatusServiceOrder({ dispatch }, payload) {
            axios.patch(`/serviceOrder/${payload.item.id}`, {id: payload.item.id, status: payload.newStatus}).then(response => {
                payload.item.status = payload.newStatus
                dispatch('getServiceOrdersByEmployee')
            }).catch(error => {
                console.log(error)
            })
        }
    },
}