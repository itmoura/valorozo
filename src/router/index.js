import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from "@/views/Signup";
import Login from "@/views/Login";
import Thanks from "@/views/Thanks";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: localStorage.getItem('nickname') ? Thanks : Signup
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/selectionPlayers',
    name: 'SelectionPlayers',
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectionPlayers.vue')
  },
  {
    path: '/thanks',
    name: 'Thanks',
    component: Thanks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
