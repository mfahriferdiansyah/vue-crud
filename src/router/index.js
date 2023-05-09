import { createRouter, createWebHashHistory } from 'vue-router'
const Dashboard = { template: "<div>Home</div>" };

const routes = [
  {
    path: "/",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router