<template>
	<div class="login-page page-content--fill-size page-content--position-center">
		<div class="container">
			<div class="login-form-wrap">
				<h1 class="page-content__title">로그인</h1>
				<LoginForm></LoginForm>
			</div>
		</div>
	</div>
</template>

<script>
import LoginForm from '@/components/common/LoginForm.vue';

export default {
	components: {
		LoginForm,
	},
};
</script>

<style>
.login-form-wrap {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.login-page .container {
}
</style>
