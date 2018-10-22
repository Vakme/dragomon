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
      beforeEnter: shouldBeAuthenticated,
      component: Home
    },
    {
      path: '/ranking',
      name: 'ranking',
      beforeEnter: shouldBeAuthenticated,
      component: () => import('./views/Ranking.vue')
    },
    {
      path: '/monsters',
      name: 'monsters',
      beforeEnter: shouldBeAuthenticated,
      component: () => import('./views/Monsters.vue')
    },
    {
      path: '/trader',
      name: 'trader',
      beforeEnter: shouldBeAuthenticated,
      component: () => import('./views/Trader.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      beforeEnter: shouldBeAuthenticated,
      component: () => import('./views/Chat.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      beforeEnter: shouldBeAuthenticated,
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: shouldNotBeAuthenticated,
      component: () => import('./views/Login.vue')
    },
    { path: '/404',
      component: NotFound },
    { path: '*',
      redirect: '/404' }
  ]
})
