import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);

// putting it here, multiple components are going to be using it
Vue.filter('currency', (value) => {
  return 'R' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
