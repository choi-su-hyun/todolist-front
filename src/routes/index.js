import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from '@/store/store';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/welcome',
		},
		{
			path: '/welcome',
			component: () => import('@/views/CoverPage.vue'),
			meta: { auth: false },
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
			meta: { auth: false },
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue'),
		},
		{
			path: '/list',
			component: () => import('@/views/ListPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/create',
			component: () => import('@/views/CreatePage.vue'),
			meta: { auth: true },
		},
		{
			path: '/edit/:id',
			component: () => import('@/views/EditPage.vue'),
			meta: { auth: true },
		},
		{
			path: '*',
			component: () => import('@/views/NotFound.vue'),
			meta: { auth: true },
		},
	],
});

router.beforeEach((to, from, next) => {
	// console.log(store.getters.isLogin);
	if (to.meta.auth && !store.getters.isLogin) {
		alert('로그인이 필요합니다.');
		next('/login');
		return;
	} else if (!to.meta.auth && store.getters.isLogin) {
		alert('이미 회원이시네요.');
		next('/list');
		return;
	}
	next();
});

export default router;
