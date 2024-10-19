import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/homeView.vue';
import AuthLayout from '../views/auth/AuthLayout.vue'
import AtletaLayout from '../views/atleta/AtletaLayout.vue'

import AdminLayout from '../views/admin/AdminLayout.vue';

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
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/atleta/AtletaDashboard.vue'),
        },
        {
          path: 'calculadora',
          name: 'calculadora-inicio',
          component: () => import('../views/atleta/CalculadoraView.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children: [
        {
          path: 'dashboard',
          name: 'resumen',
          component: () => import('../views/admin/ResumenView.vue'),
        },
        {
          path: 'create-user',
          name: 'create-user',
          component: () => import('../views/admin/CreateUserView.vue')
        },
        {
          path: 'create-membership',
          name: 'create-membership',
          component: () => import('../views/admin/CreateMembershipView.vue')
        },
        {
          path: 'view-membership',
          name: 'view-membership',
          component: () => import('../views/admin/MembershipView.vue')
        },
        {
          path: 'viewDetails-membership/:id',
          name: 'viewDetails-membership/:id',
          component: () => import('../views/admin/MembershipDetails.vue')
        },
        {
          path: 'view-users',
          name: 'view-users',
          component: () => import('../views/admin/UsersView.vue')
        },
        {
          path: 'user-details',
          name: 'user-details',
          component: () => import('../views/admin/UserDetails.vue'),
        }
      ]
    },
  ]
})

export default router
