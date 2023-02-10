import Vue from 'vue';
import Vuex from 'vuex';
import { getCookie } from '@/utils/cookie';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		nickName: getCookie('nickName') || '',
		token: getCookie('token') || '',
	},
	getters: {
		isLogin(state) {
			let status = state.nickName !== '';
			return status;
		},
	},
	mutation: {},
});
