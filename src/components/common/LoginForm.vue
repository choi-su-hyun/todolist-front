<template>
	<form class="login-form" v-on:submit.prevent="loginForm">
		<div class="log-message--warning" v-show="logMessageToggle">
			<h4>{{ logMessage }}</h4>
		</div>
		<div>
			<input class="input" type="text" placeholder="아이디" v-model="user_id" />
		</div>
		<div>
			<input
				class="input"
				type="password"
				placeholder="비밀번호"
				v-model="password"
			/>
		</div>
		<button
			class="block-btn--cta"
			type="submit"
			v-bind:disabled="!user_id || !password"
		>
			로그인 하기
		</button>
	</form>
</template>

<script>
import { loginUser } from '@/api/auth';

export default {
	data() {
		return {
			user_id: '',
			password: '',

			// on/off toggle
			logMessage: '',
			logMessageToggle: false,
		};
	},
	methods: {
		async loginForm() {
			const userData = {
				user_id: this.user_id,
				password: this.password,
			};
			const loginResult = await loginUser(userData);
			console.log(loginResult);
			if (loginResult.successStatus) {
				this.$router.push('/list');
			} else {
				this.logMessageToggle = true;
				this.logMessage = loginResult.message;
			}
			this.initForm();
		},
		initForm() {
			this.user_id = '';
			this.password = '';
		},
	},
};
</script>

<style>
.login-form {
	display: flex;
	flex-direction: column;
	gap: 16px 0;
	margin-top: 56px;
	width: 360px;
}
.login-form .input {
	width: 100%;
}
@media screen and (max-width: 767px) {
	.login-form {
		/* padding: 0 16px; */
		width: auto;
	}
}
</style>
