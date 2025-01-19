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
      path: '/admin',
      children: [
        {
          path: '',
          name: 'admin',
          component: () => import('../views/admin/AdminView.vue'),
        },
        {
          path: 'schedule',
          children: [
            {
              path: 'upload',
              name: 'schedule-upload',
              component: () => import('../views/admin/schedule/UploadScheduleView.vue'),
            },
          ],
        },
      ],
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
          path: ':id',
          name: 'schedule-detail',
          component: () => import('../views/schedule/ScheduleDetailView.vue'),
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
      path: '/info',
      children: [
        {
          path: '',
          name: 'info-list',
          component: () => import('../views/info/InfoView.vue'),
        },
        {
          path: ':id',
          name: 'info-detail',
          component: () => import('../views/info/InfoDetailView.vue'),
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
      component: () => import('../views/profile/ProfileView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
