import Vue from 'vue';
import VueRouter from 'vue-router';

import Words from '../views/Words.vue';
import New from '../views/New.vue';
import Show from '../views/Show.vue';
import Edit from '../views/Edit.vue';
import Test from '../views/Test.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/words'
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/words/new',
    name: 'new-word',
    component: New
  },
  {
    path: '/words/:id',
    name: 'show',
    component: Show
  },
  {
    path: '/words/:id/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

export default router;
