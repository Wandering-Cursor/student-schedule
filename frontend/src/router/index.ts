import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/group',
      children: [
        {
          path: '',
          name: 'group-list',
          component: () => import('../views/group/GroupListView.vue'),
        },
        {
          path: ':id',
          name: 'group-detail',
          component: () => import('../views/group/GroupDetailView.vue'),
        },
      ],
    },
    {
      path: '/specialty',
      children: [
        // Not used
        // {
        //   path: '',
        //   name: 'specialty-list',
        //   component: () => import('../views/SpecialtyListView.vue'),
        // },
        {
          path: ':id',
          name: 'specialty-detail',
          component: () => import('../views/specialty/SpecialtyDetailView.vue'),
        },
      ],
    },
    {
      path: '/schedule',
      children: [
        {
          path: '',
          name: 'schedule',
          component: () => import('../views/schedule/ScheduleView.vue'),
        },
        {
          path: 'photo/:id',
          name: 'photo-schedule',
          component: () => import('../views/schedule/PhotoScheduleView.vue'),
        },
        {
          path: 'group/:id',
          name: 'group-schedule',
          component: () => import('../views/schedule/GroupScheduleView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/auth/LogoutView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/auth/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
