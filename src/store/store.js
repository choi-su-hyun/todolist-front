import Vue from 'vue';
import Vuex from 'vuex';
import { getCookie } from '@/utils/cookie';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		userName: getCookie('userName') || '',
		token: getCookie('token') || '',
	},
	getters: {
		isLogin(state) {
			let status = state.userName !== '';
			return status;
		},
	},
	mutation: {},
});
