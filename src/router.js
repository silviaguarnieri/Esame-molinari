import { createRouter, createWebHashHistory } from "vue-router";

import home from "./views/home.vue";
import about from "./views/About.vue";
//importare anche projects se c'è

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    }
    //aggiungere anche projects se c'è

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;