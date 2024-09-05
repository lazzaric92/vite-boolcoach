import AppHome from '@/components/pages/guests/AppHome.vue';
import UserDashboard from '@/components/pages/users/UserDashboard.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: UserDashboard
    },
    
  ]
})

export {router};
