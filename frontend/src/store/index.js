import { createStore } from 'vuex'

import login from './modules/login'
import quote from './modules/quote'
import serviceOrder from './modules/serviceOrder'
import user from './modules/user'

export default createStore({
    modules: {
        quote,
        login,
        serviceOrder,
        user
    }
})