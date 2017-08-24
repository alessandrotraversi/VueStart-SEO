import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router.map';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta);

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
