import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
//import Home from '../views/home.vue'
import particular from '../component/conteneur/particular/particular.vue'
import companies from '../component/conteneur/companies/companies.vue'
import prices from '../component/conteneur/prices/prices.vue'
import navbar from '../component/helper/navbar_reponsive.vue'

const routes = [
  {
    path: '/',
    component: companies
  },
  {
    path: '/particular',
    component: particular
  },
  {
    path: '/prices',
    component: prices
  },
  {
    path: '/navbar',
    component: navbar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
