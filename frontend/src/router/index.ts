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
          component: () => import('../views/GroupListView.vue'),
        },
        {
          path: ':id',
          name: 'group-detail',
          component: () => import('../views/GroupDetailView.vue'),
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
          component: () => import('../views/SpecialtyDetailView.vue'),
        },
      ],
    },
    {
      path: '/schedule',
      children: [
        {
          path: '',
          name: 'schedule',
          component: () => import('../views/ScheduleView.vue'),
        },
        {
          path: 'photo/:id',
          name: 'photo-schedule',
          component: () => import('../views/PhotoScheduleView.vue'),
        },
        {
          path: 'group/:id',
          name: 'group-schedule',
          component: () => import('../views/GroupScheduleView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
