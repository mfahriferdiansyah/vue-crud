import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'

const routes = [
  {
    path: '',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/user-form',
    name: 'Form',
    component: Dashboard,
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    redirect: 'Dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router