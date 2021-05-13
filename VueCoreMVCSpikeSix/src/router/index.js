import { createRouter, createWebHashHistory } from 'vue-router'
//import Home from '@/pages/home/Home.vue'

const routes = [
    //{ name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: () => import('@/pages/about/about.vue') },
    { name: 'home-redirect', path: '/', redirect: '/posts' },
    { name: 'post-list', path: '/posts', component: () => import('@/pages/posts/PostList.vue') },
    { name: 'new-post', path: '/posts/new', component: () => import('@/pages/posts/Create.vue') },
    { name: 'edit-post', path: '/posts/edit/:id', component: () => import('@/pages/posts/Edit.vue') }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
