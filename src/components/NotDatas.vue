<template>
	<div class="not-datas">
		<h4 class="not-datas__title">아직 해야할 일이 없네요!</h4>
		<p class="not-datas__paragraph">
			오늘의 할 일을 정하셨나요? <br />
			오늘도 의미있는 하루를 위해 할 일을 정리하고 시작해보세요.
		</p>
		<p class="not-datas__moving-text">오늘 할일을 추가해주세요</p>
	</div>
</template>

<script>
export default {};
</script>

<style>
.not-datas {
	background-image: url('@/assets/not-datas-back.png');
	background-position: top center;
	background-repeat: no-repeat;
	text-align: center;
	padding-top: 120px;
}
.not-datas__title {
	font-size: 32px;
	color: var(--cool-gray800);
}
.not-datas__paragraph {
	font-size: 18px;
	color: var(--cool-gray600);
	margin-top: 24px;
	line-height: 150%;
}
.not-datas__moving-text {
	margin-top: 450px;
	color: var(--secondary);
	font-weight: 700;
	animation: for-click-moving 0.8s linear infinite alternate;
}
@keyframes for-click-moving {
	0% {
		transform: translateY(-8px);
	}
	100% {
		transform: translateY(0px);
	}
}
</style>
