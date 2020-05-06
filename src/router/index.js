import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import End from '../views/End.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/End',
    name: 'End',
    component: End
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
