<template>
	<div class="cover-page page-content--fill-size">
		<div class="container page-content--position-center">
			<h1 class="cover-page__title text-center">
				Todo List에 오신 것을 <span class="in-block">환영합니다!</span>
			</h1>
			<h2 class="cover-page__subtext"><span>Welcome to</span> ‘To do List’.</h2>
			<div class="cover-page__bottom-btn-wrap">
				<router-link class="block-btn--general" to="/login"
					>로그인 하러 가기</router-link
				>
				<div>
					<span class="cover-page__bottom-text">회원이 아니신가요? </span
					><router-link to="/signup" class="cover-page__bottom-btn"
						>회원가입</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.cover-page__title {
	font-size: 64px;
	color: var(--cool-gray900);
}
.cover-page__subtext {
	font-size: 20px;
	color: var(--cool-gray800);
	margin-top: 16px;
}
.cover-page__subtext span {
	font-weight: 400;
}
.cover-page__bottom-btn-wrap {
	margin-top: 60px;
	display: flex;
	flex-direction: column;
	gap: 16px 0;
}
.cover-page__bottom-text {
	color: var(--cool-gray700);
	font-size: 16px;
}
.cover-page__bottom-btn {
	color: var(--blue-color);
	text-decoration: underline;
}
.cover-page {
	background-image: url(@/assets/cover-background.jpg);
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	/* height: calc(100vh - 186px); */
	display: flex;
	align-items: center;
	justify-content: center;
}
/* .cover-page .container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
} */
@media screen and (max-width: 767px) {
	.cover-page__title {
		font-size: 40px;
	}
}
</style>
