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
		<div class="login-page__bottom-wrap">
			<span class="login-page__bottom-text">회원이 아니신가요? </span
			><router-link to="/signup" class="login-page__bottom-btn"
				>회원가입</router-link
			>
		</div>
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
.login-page__bottom-text {
	color: var(--cool-gray700);
	font-size: 16px;
}
.login-page__bottom-btn {
	color: var(--blue-color);
	text-decoration: underline;
}
.login-page__bottom-wrap {
	text-align: center;
}
@media screen and (max-width: 767px) {
	.login-form {
		/* padding: 0 16px; */
		width: auto;
	}
}
</style>
