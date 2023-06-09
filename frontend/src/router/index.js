import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: { requiresAuth: false },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { requiresAuth: true },
    component: () => import('../views/DashboardView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  let isAuthenticated = store.getters.user

  if (!isAuthenticated) {
    try {
      await store.dispatch('autoLogin')
      isAuthenticated = store.getters.user
    } catch (err) {
      console.log(err)
    }
  }

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirecționează utilizatorul către pagina de autentificare sau o altă rută de gestionare a accesului
    next({ name: 'login' })
  } else if (to.meta.requiresAuth === false && isAuthenticated) {
    // Permite accesul la rută
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
