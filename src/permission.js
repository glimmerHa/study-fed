import router from './router'
import store from './store'
import { Message } from 'element-ui'

import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to,from,next)=>{

    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if(to.path==='/login'){
            next({path:'/'})
        }else{
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
        }
    }
})