import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ColumnDetail from '@/views/ColumnDetail.vue';
import PostDetail from '@/views/PostDetail.vue';
import CreatePost from '@/views/CreatePost.vue';
import store from './store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login, meta: { needRedirctToHome: true } },
    { path: '/column/:id', name: 'column', component: ColumnDetail },
    { path: '/posts/:id', name: 'post', component: PostDetail },
    { path: '/create', name: 'create', component: CreatePost, meta: { needLogin: true } }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to.meta, store.state.user);
  if (!store.state.user.isLogin && to.meta.needLogin) {
    next('/login');
  } else if (to.meta.needRedirctToHome && store.state.user.isLogin) {
    next('/');
  } else {
    next();
  }
});

export default router;
