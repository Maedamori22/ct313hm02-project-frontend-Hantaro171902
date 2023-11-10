import { createWebHistory, createRouter } from 'vue-router';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
// import Menu from '../views/Menu.vue';
// import AboutUs from '../views/AboutUs.vue';
// import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home }
  //   { path: '/menu', component: Menu },
  //   { path: '/about', component: AboutUs },
  //   { path: '/cart', component: Cart }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
