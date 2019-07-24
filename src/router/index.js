import Vue from 'vue'
import Router from 'vue-router'

import Layout from '~/views/layout/Layout'

Vue.use(Router)
export const asyncRoutes = [

]
export const constantRoutes = [
    {
        path: '/',
        component: Layout,
    },
]
const router = new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

export default router