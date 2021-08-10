import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/your-details',
    name: 'Your Details',
    component: () => import("@/views/Details")

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/yourDetails.vue')
  },
  {
    path: '/your-email',
    name: 'Your Email',
    component: () => import("@/views/Email")

  },
  {
    path: '/your-postcode',
    name: 'Your Postcode',
    component: () => import("@/views/Postcode"),
  },
  {
    path: '/your-cover',
    name: 'Your Cover',
    component: () => import("@/views/Cover"),
  },
  {
    path: '/your-benefits',
    name: 'Your Benefits',
    component: () => import("@/views/Benefits"),
  },
  {
    path: '/results',
    name: 'Results',
    component: () => import("@/views/Results"),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
