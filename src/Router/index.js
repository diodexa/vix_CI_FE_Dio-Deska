import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
// import HomePages from '@/pages/homePages.vue'



const routes = [
    // {
    //     path: '/',
    //     component: HomePages
    // },
    {
        path: '/:id',
        name: 'Product',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
