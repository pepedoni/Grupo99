import { getField, updateField } from 'vuex-map-fields';
import axios from '../../config/axios'
import router from '@/router'

const parseJwt = (token) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export default {
    namespaced: true,
    state: {
        accessToken: '',
        user: {},
        loginRequest: {
            email: '',
            password: '',
        },
        loggedIn: false,
    },
    getters: {
        getField,
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setAccessToken(state, payload) {
            state.accessToken = payload.token
            if(payload.token != '') {
                state.loggedIn = true
                localStorage.setItem('accessToken', payload.token)
            } else {
                state.loggedIn = false
            }
        },
        updateField,
    },
    actions: {
        login({ commit, state }) {
            console.log(state.loginRequest)
            axios.post('/login', state.loginRequest).then(response => {
                commit('setAccessToken', {token: response.data.jwt})
                commit('setUser', parseJwt(response.data.jwt))
                router.push({ name: 'Home' })
            })
        },
        logout({ commit, state }) {
            commit('setAccessToken', {token: ''})
            commit('setUser', {})
            localStorage.removeItem('accessToken')
            router.push({ name: 'Login' })
        },
        checkToken({ commit, state }) {
            if(!state.accessToken && !localStorage.getItem('accessToken')) {
                router.push({ name: 'Login' })
            } else {
                let jwt = {}
                let now = new Date()
                if(!state.accessToken) {
                    jwt = parseJwt(localStorage.getItem('accessToken'))
                    if(jwt.iat < now.getTime() || !jwt.iat) {
                        commit('setAccessToken', {token: ''})
                        localStorage.removeItem('accessToken')
                        router.push({ name: 'Login' })
                    } else {
                        commit('setAccessToken', {token: state.accessToken})
                        commit('setUser', parseJwt(state.accessToken))
                    }
                } else if( localStorage.getItem('accessToken') ) {
                    jwt = parseJwt(localStorage.getItem('accessToken'))
                    if(jwt.iat < now.getTime() || !jwt.iat) {
                        commit('setAccessToken', {token: ''})
                        localStorage.removeItem('accessToken')
                        router.push({ name: 'Login' })
                    } else {
                        commit('setAccessToken', {token: state.accessToken})
                        commit('setUser', parseJwt(state.accessToken))
                    }
                }
            }
        },
        unauthenticated({ commit }) {
            commit('setUser', {})
            commit('setAccessToken', '')
            router.push({ name: 'Login' })
        }
    },
}