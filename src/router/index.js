import Vue from 'vue'
import VueRouter from 'vue-router'
import Wedding from '../views/Wedding.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Wedding',
    component: Wedding
  },
  {
    path: '/recieved',
    name: 'Recieved',
    component: () => import('../views/Recieved.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
