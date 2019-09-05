import router from './router'
import store from './store'
import { Message } from 'element-ui'

import { getToken } from '@/utils/auth' // get token from cookie

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to,from,next)=>{
    console.log('to', to.fullPath)
    console.log('getToken', getToken())
    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
        if(to.path==='/login'){
            next({path:'/'})
        }else{
            const hasRoles = store.getters.roles && store.getters.roles.length > 0
            if(hasRoles){
                next()
            }else{
                // try{
                //     console.log('store', store)
                //     const {roles} = await store.dispatch('getInfo')
                // }
            }
        }
    }
})