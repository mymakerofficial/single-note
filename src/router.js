import VueRouter from 'vue-router';
import home from './views/Home.vue';
import notFound from './views/Home.vue';

const routes = [
    { path: '/', name: 'home', component: home },
    { path: '*', name: 'not_found', component: notFound }
]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes
})

export default router;