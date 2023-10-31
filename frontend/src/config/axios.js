import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = 'http://localhost:3001'

axios.interceptors.request.use(function(config) {
    let url = config.url
    console.log(url)
    
    let token = store.state.login.accessToken
    if (token) {
    config.headers.Authorization = `${token}`;
    }

    return config;
}, function(err) {
    return Promise.reject(err);
});

export default axios