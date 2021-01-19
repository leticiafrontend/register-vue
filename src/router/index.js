import Vue from 'vue';
import VueRouter from 'vue-router';
import Register from '../views/Register.vue';
import Users from '../views/Users.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Register',
    component: Register,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
