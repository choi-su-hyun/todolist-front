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
import { setCookie } from '@/utils/cookie';

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
			try {
				const userData = {
					user_id: this.user_id,
					password: this.password,
				};
				let { data } = await loginUser(userData);
				this.$store.state.userName = data.user.name;
				this.$store.state.token = data.authorization.token;
				// console.log(data);
				setCookie('userName', data.user.name);
				setCookie('token', data.authorization.token);
				this.$router.push('/list');
			} catch (err) {
				console.log(err);
				if (err.response.data === 'Password is unvalid') {
					this.logMessageToggle = true;
					this.logMessage = '아이디와 비밀번호가 일치하지 않습니다.';
				} else if (err.response.data === 'This id is not found') {
					this.logMessageToggle = true;
					this.logMessage = '존재하지 않는 아이디입니다.';
				}
			} finally {
				this.initForm();
			}
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
