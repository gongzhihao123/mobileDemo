import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/home',
    children: [
      { path: '/home', name: 'home', component: () => import('./../views/home/index.vue') },
      { path: '/list', name: 'list', component: () => import('./../views/list/index.vue') }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./../views/login/index.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
