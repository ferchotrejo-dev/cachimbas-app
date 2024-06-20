import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/homeView.vue';
import AuthLayout from '../views/auth/AuthLayout.vue';
import AtletaLayout from '../views/atleta/AtletaLayout.vue';
import Dashboard from '../views/atleta/DashboardAtleta.vue';
import AdminLayout from '../views/admin/AdminLayout.vue';
import VisualizarAviso from '../views/atleta/VisualizarAviso.vue';
import AgregarInformacioAtl from '../views/atleta/AgregarInformacioAtl.vue';

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
        },
        {
          path: 'dashboard-atleta',
          name: 'dashboard-atleta',
          component:() => import('../views/atleta/DashboardAtleta.vue')
        },
        {
          path: 'visualiza-avisoatl',
          name: 'visualiza-avisoatl',
          component:() => import('../views/atleta/VisualizarAviso.vue')
        },
        {
          path: 'agregar-infoatl',
          name: 'agregar-infoatl',
          component:() => import('../views/atleta/AgregarInformacioAtl.vue')
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
        }
      ]
    },
   
  ]
})

export default router
