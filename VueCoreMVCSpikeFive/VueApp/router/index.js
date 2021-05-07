import VueRouter from 'vue-router'

import PostList from '@/views/posts/PostList';
import NewPost from '@/views/posts/Create';
import EditPost from '@/views/posts/Edit';
import SimpleInput from '@/views/input/SimpleInput'

const routes = [
    { name: 'home-redirect', path: '/', redirect: '/posts' },
    { name: 'post-list', path: '/posts', component: PostList },
    { name: 'new-post', path: '/posts/new', component: NewPost },
    { name: 'edit-post', path: '/posts/edit/:id', component: EditPost },
    { name: 'simple-input', path: '/input/', component: SimpleInput }
]

const router = new VueRouter({
    mode: 'history',
    base: '/admin/',
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes
});

export default router
