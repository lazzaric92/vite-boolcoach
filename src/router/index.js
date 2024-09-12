
import AppHome from '@/components/pages/guests/AppHome.vue';
import AppSearch from '@/components/pages/guests/AppSearch.vue';
import ShowCoach from '@/components/pages/guests/ShowCoach.vue';
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
      path: '/search',
      name: 'search',
      component: AppSearch
    },
    {
      path: '/coach/:id',
      name: 'coach-details',
      component: ShowCoach
    }
  ]
})

export { router };
