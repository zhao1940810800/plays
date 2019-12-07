import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'broadcast',
    component: () => import('../views/index/index.vue'),
    children: [
      {
        name: 'broadcast',
        path: 'broadcast',
        component: () => import('../views/broadcast/index.vue')
      },
      {
        name: 'Schedule',
        path: 'Schedule',
        component: () => import('../views/Schedule/index.vue')
      },
      {
        name: 'dialogue',
        path: 'dialogue',
        component: () => import('../views/dialogue/index.vue')
      },
      {
        name: 'job',
        path: 'job',
        component: () => import('../views/job/index.vue')
      },
      {
        name: 'group',
        path: 'group',
        component: () => import('../views/group/index.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
