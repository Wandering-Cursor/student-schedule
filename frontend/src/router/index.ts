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
