import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'registrationList',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/studentRegistration',
    name: 'studentRegistration',
    component: () => import('@/views/StudentRegistration/StudentRegistration.vue'),
  },
  {
    path: '/editStudentRegistration/:id',
    name: 'editStudentRegistration',
    component: () => import('@/views/StudentRegistration/StudentRegistration.vue'),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

