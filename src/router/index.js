import { createRouter, createWebHistory } from 'vue-router'
import AnimalCell from '../views/AnimalCell.vue'
import PlantCell from '../views/PlantCell.vue'
import AS from '../views/AnimalCell_SideBar.vue'

const routes = [{
        path: '/',
        name: 'AnimalCell',
        component: AnimalCell
    },
    {
        path: '/plantcell',
        name: 'PlantCell',
        component: PlantCell
    },
    {
        path: '/as',
        name: 'AS',
        component: AS
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router