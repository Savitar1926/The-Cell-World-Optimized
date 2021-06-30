import { createRouter, createWebHistory } from 'vue-router'
import AnimalCell from '../views/AnimalCell_SideBar.vue'
import PlantCell from '../views/PlantCell_SideBar.vue'
import Mitosis from '../views/Mitosis.vue'

const routes = [{
        path: '/',
        name: 'Animal Cell',
        component: AnimalCell
    },
    {
        path: '/plantcell',
        name: 'Plant Cell',
        component: PlantCell
    },
    {
        path: '/mitosis',
        name: 'Mitosis',
        component: Mitosis
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router