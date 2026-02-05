import { createRouter, createWebHashHistory } from "vue-router";

import Home from './views/home.vue';
import Projects from './views/projects.vue';
import Contact from './views/contact.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
]

const router = createRouter({
    history: createWebHashHistory(), // qui creo il router con la history di tipo hash
    routes
})

export default router;