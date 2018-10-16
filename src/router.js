import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import store from './store'
Vue.use(Router)

const shouldNotBeAuthenticated = (to, from, next) => {
  if (!store.getters.getLoginState) {
    next()
    return
  }
  next('/')
}

const shouldBeAuthenticated = (to, from, next) => {
  if (store.getters.getLoginState) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      beforeEnter: shouldBeAuthenticated,
      component: () => import('./views/Profile.vue')
    },
    { path: '/404',
      component: NotFound },
    { path: '*',
      redirect: '/404' },
  ]
})
