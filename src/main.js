import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import axios from 'axios';
import { store } from '@/store/store';
import { formatDate } from '@/utils/dateFilter';
import { gsap } from 'gsap';

Vue.prototype.$http = axios;
Vue.prototype.$gsap = gsap;

Vue.filter('formatDate', formatDate);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app');
