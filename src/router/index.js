import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/homeView.vue';
import AuthLayout from '../views/auth/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/loginView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => AuthLayout,
      children: [
        {
          path: 'confirm-account',
          name: 'confirm-account',
          component: () => import('../views/auth/ConfirmAccountView.vue')
        }
      ]
    }
  ]
})

export default router
