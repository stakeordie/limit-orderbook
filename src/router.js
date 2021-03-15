import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/Index.vue';

import Mint from './examples/Mint.vue';

const routes = [
    { path: '/', component: Index },


    { path: '/examples/mint', component: Mint },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;