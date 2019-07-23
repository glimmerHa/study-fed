import Vue from 'vue'
import Router from 'vue-router'

import Layout from '~/views/layout/Layout'

Vue.use(Router)

const constantRoute = [
    {
        path: '/',
        component: Layout,
    },
]
const router = new Router({
    routes: constantRoute
})

export default router