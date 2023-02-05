<template>
	<div class="container--md">
		<div class="page-content-wrap">
			<h1 class="page-content__title text-center">길을 잘 못 들으셨네요</h1>
			<div>
				<p class="page-content__paragraph text-center">기존 회원이신가요?</p>
			</div>
			<div class="btn-wrap">
				<router-link to="/list" class="block-btn--cta block-btn--md-cta"
					>리스트로 가기</router-link
				>
				<router-link to="/welcome" class="block-btn--cta block-btn--md-cta"
					>처음이에요</router-link
				>
			</div>
			<div class="img-wrap">
				<img src="@/assets/not-page-back.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.btn-wrap {
	margin-top: 40px;
	text-align: center;
	display: flex;
	justify-content: center;
	gap: 24px;
}
.img-wrap {
	margin-top: 24px;
	text-align: center;
}
</style>
