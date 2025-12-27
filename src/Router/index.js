import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import NotFound from '../pages/NotFound.vue'
// import HomePages from '@/pages/homePages.vue'



const routes = [
    // {
    //     path: '/',
    //     component: HomePages
    // },
    {
        path: '/:id(\\d+)',
        name: 'Product',
        component: MainPage
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/not-found'
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
