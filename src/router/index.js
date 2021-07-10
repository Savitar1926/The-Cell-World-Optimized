import { createRouter, createWebHistory } from 'vue-router'
import AnimalCell from '../views/AnimalCell_SideBar.vue'
import PlantCell from '../views/PlantCell_SideBar.vue'
import Mitosis from '../views/Mitosis.vue'
import Prophase from '../views/Prophase.vue'
import Anaphase from '../views/Anaphase.vue'
import Metaphase from '../views/Metaphase.vue'
import Telophase from '../views/Telophase.vue'

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
    {
        path: '/prophase',
        name: 'Prophase',
        component: Prophase
    },
    {
        path: '/anaphase',
        name: 'Anaphase',
        component: Anaphase
    },
    {
        path: '/metaphase',
        name: 'Metaphase',
        component: Metaphase
    },
    {
        path: '/telophase',
        name: 'Telophase',
        component: Telophase
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router