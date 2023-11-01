import { createStore } from 'vuex'

import login from './modules/login'
import serviceOrder from './modules/serviceOrder'
import user from './modules/user'

export default createStore({
    modules: {
        login,
        serviceOrder,
        user
    }
})