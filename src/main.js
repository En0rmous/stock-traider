import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';
import vueResource from 'vue-resource';


Vue.use(VueRouter);
Vue.use(vueResource);

Vue.http.options.root = 'https://vue-http-7494b.firebaseio.com/';

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
})
const router = new VueRouter({
	mode: 'history',
	routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
