import { createStore } from 'vuex'

import quote from './modules/quote'
import login from './modules/login'
import user from './modules/user'

export default createStore({
    modules: {
        quote,
        login,
        user
    }
})