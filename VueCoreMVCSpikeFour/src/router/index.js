import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/counter',
        name: 'Counter',
        component: () => import(/* webpackChunkName: "about" */ '../components/home/Counter.vue')
    },
    {
        path: '/viewcounter',
        name: 'ViewCounter',
        component: () => import(/* webpackChunkName: "about" */ '../components/home/ViewCounter.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
