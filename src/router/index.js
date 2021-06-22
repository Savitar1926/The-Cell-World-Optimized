import { createRouter, createWebHistory } from 'vue-router'
import AS from '../views/AnimalCell_SideBar.vue'
import PlantCell from '../views/PlantCell_SideBar.vue'

const routes = [{
        path: '/',
        name: 'AS',
        component: AS
    },
    {
        path: '/plantcell',
        name: 'PlantCell',
        component: PlantCell
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router