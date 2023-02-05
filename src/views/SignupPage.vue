<template>
	<div class="signup-page page-content--fill-size">
		<div class="container--sm">
			<h1 class="page-content__title">회원가입</h1>
			<SignupForm></SignupForm>
		</div>
	</div>
</template>

<script>
import SignupForm from '@/components/common/SignupForm.vue';

export default {
	components: {
		SignupForm,
	},
};
</script>

<style>
.page-content__title {
	text-align: center;
}
.signup-page {
	margin-top: 80px;
}
@media screen and (max-width: 767px) {
	.signup-page.page-content--fill-size {
		height: auto;
	}
	.signup-page {
		margin: 40px 0;
	}
}
</style>
