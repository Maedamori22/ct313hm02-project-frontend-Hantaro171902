import { createWebHistory, createRouter } from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Signin from '@/views/Signin.vue';
// import Menu from '../views/Menu.vue';
// import AboutUs from '../views/AboutUs.vue';
// import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: Home, component: Home },

  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/NotFound.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/signin',
    name: 'signin',
    component: Signin
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
