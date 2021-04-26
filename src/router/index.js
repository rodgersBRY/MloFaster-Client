import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/Auth/Register.vue'
import Login from '../views/Auth/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/new-hotel',
    name: 'New Hotel',
    component: () => import('../views/New-hotel.vue')
  },
  {
    path: '/hotel/:Hid',
    name: 'Hotel',
    component: () => import('../components/Hotel.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/orders',
    name: 'Orders',
    component: () => import('../views/Orders.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
