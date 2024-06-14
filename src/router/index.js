import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/homeView.vue';

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
