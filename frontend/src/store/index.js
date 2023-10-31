import { createStore } from 'vuex'

import login from './modules/login'
import user from './modules/user'

export default createStore({
    modules: {
        login,
        user
    }
})