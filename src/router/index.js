import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/homeView.vue";
import AuthLayout from "../views/auth/AuthLayout.vue";
import AtletaLayout from "../views/atleta/AtletaLayout.vue";
import Dashboard from "../views/atleta/DashboardAtleta.vue";
import AdminLayout from "../views/admin/AdminLayout.vue";
import VisualizarAviso from "../views/atleta/VisualizarAviso.vue";
import AgregarInformacioAtl from "../views/atleta/AgregarInformacioAtl.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/loginView.vue"),
    },
    {
      path: "/auth",
      name: "auth",
      component: () => AuthLayout,
      children: [
        {
          path: "confirm-account",
          name: "confirm-account",
          component: () => import("../views/auth/ConfirmAccountView.vue"),
        },
        {
          path: "request-code",
          name: "request-code",
          component: () => import("../views/auth/RequestNewCodeView.vue"),
        },
        {
          path: "forgot-password",
          name: "forgot-password",
          component: () => import("../views/auth/ForgotPasswordView.vue"),
        },
        {
          path: "new-password",
          name: "new-password",
          component: () => import("../views/auth/NewPasswordView.vue"),
        },
        {
          path: "sing-up",
          name: "sing-up",
          component: () => import("../views/auth/SingUpView.vue"),
        },
      ],
    },
    {
      path: "/atleta",
      name: "atleta",
      component: () => AtletaLayout,
      children: [
        {
          path: "dashboard",
          name: "atleta-dashboard",
          component: () => import("../views/atleta/AtletaDashboard.vue"),
        },
        {
          path: "info-atleta",
          name: "info-atleta",
          component: () => import("../views/atleta/AgregarInformacionAtl.vue"),
        },
        {
          path: "calculadora",
          name: "calculadora-inicio",
          component: () => import("../views/atleta/CalculadoraView.vue"),
        },
        {
          path: "record",
          name: "record",
          component: () => import("../views/atleta/AtletaExercice.vue"),
        },
        {
          path: "agregar-pr",
          name: "agregar-pr",
          component: () => import("../views/atleta/AgregarPR.vue"),
        },
        {
          path: "visualizar-pr",
          name: "visualizar-pr",
          component: () => import("../views/atleta/VisualizarPR.vue"),
        },
        {
          path: "actualizar-pr/:id",
          name: "actualizar-pr/:id",
          component: () => import("../views/atleta/ActualizarPR.vue"),
        },
        {
          path: "agregar-skill",
          name: "agregar-skill",
          component: () => import("../views/atleta/AgregarSkill.vue"),
        },
        {
          path: "actualizar-skill/:id",
          name: "actualizar-skill/:id",
          component: () => import("../views/atleta/ActualizarSkill.vue"),
        },
        {
          path: "visualizar-skill",
          name: "visualizar-skill",
          component: () => import("../views/atleta/VisualizarSkill.vue"),
        },
        {
          path: "agregar-benchmark",
          name: "agregar-benchmark",
          component: () => import("../views/atleta/AgregarBenchmark.vue"),
        },
        {
          path: "visualizar-benchmark",
          name: "visualizar-benchmark",
          component: () => import("../views/atleta/VisualizarBenchmark.vue"),
        },
        {
          path: "agregar-score",
          name: "agregar-score",
          component: () => import("../views/atleta/AgregarScore.vue"),
        },
        {
          path: "visualizar-score",
          name: "visualizar-score",
          component: () => import("../views/atleta/VisualizarScore.vue"),
        },
        {
          path: "viewAtleta-membership",
          name: "viewAtleta-membership",
          component: () => import("../views/atleta/ViewMembership.vue"),
        },
        {
          path: "view-reminder",
          name: "view-reminder",
          component: () => import("../views/atleta/VisualizarAviso.vue"),
        },
        {
          path: "change-password",
          name: "change-password",
          component: () => import("../views/auth/ForgotPasswordView.vue"),
        },
        {
          path: "entrenamiento-generado",
          name: "entrenamiento-generado",
          component: () => import("../views/atleta/EntrenamientoGenerado.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: () => import("../views/admin/ResumenView.vue"),
        },
        {
          path: "create-user",
          name: "create-user",
          component: () => import("../views/admin/CreateUserView.vue"),
        },
        {
          path: "create-membership",
          name: "create-membership",
          component: () => import("../views/admin/CreateMembershipView.vue"),
        },
        {
          path: "view-membership",
          name: "view-membership",
          component: () => import("../views/admin/MembershipView.vue"),
        },
        {
          path: "viewDetails-membership/:id",
          name: "viewDetails-membership/:id",
          component: () => import("../views/admin/MembershipDetails.vue"),
        },
        {
          path: "view-users",
          name: "view-users",
          component: () => import("../views/admin/UsersView.vue"),
        },
        {
          path: "user-details",
          name: "user-details",
          component: () => import("../views/admin/UserDetails.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['login', 'home', 'auth', 'confirm-account', 'request-code', 'forgot-password', 'new-password', 'sing-up']
  const authRequired = !publicPages.includes(to.name)
  const token = localStorage.getItem('AUTH_TOKEN')

  if (authRequired && !token) {
    return next({ name: 'home' })
  }

  next()
})


export default router;
