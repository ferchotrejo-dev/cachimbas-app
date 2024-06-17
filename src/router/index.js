import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/homeView.vue';
import AuthLayout from '../views/auth/AuthLayout.vue'
import AtletaLayout from '../views/atleta/AtletaLayout.vue'

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
        },
        {
          path: 'request-code',
          name: 'request-code',
          component: () => import('../views/auth/RequestNewCodeView.vue')
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          component: () => import('../views/auth/ForgotPasswordView.vue')
        },
        {
          path: 'new-password',
          name: 'new-password',
          component: () => import('../views/auth/NewPasswordView.vue')
        }
      ]
    },
    {
      path: '/atleta',
      name: 'atleta',
      component: () => AtletaLayout,
      children: [
        {
          path: 'calculadora',
          name: 'calculadora-inicio',
          component: () => import('../views/atleta/CalculadoraView.vue')
        }
      ]
    }
  ]
})

export default router
