import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/home.vue'
import particular from '../views/particular.vue'
import companies from '../views/companies.vue'
import prices from '../views/prices.vue'

const routes = [
  {
    path: '/',
    component: particular
  },
  {
    path: '/companies',
    component: companies
  },
  {
    path: '/prices',
    component: prices
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
