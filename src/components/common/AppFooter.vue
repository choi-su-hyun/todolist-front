<template>
	<footer>
		<div class="container">
			<div>
				<a href="http://localhost:8080/"
					><img src="@/assets/logo--dark.png" alt=""
				/></a>
			</div>
			<div>
				<h5 class="footer__title">To do List</h5>
				<p class="footer__paragraph">
					To do List에 오신 것을 환영합니다. 오늘 해야할 일을 미루지 않는 삶을
					간단하게 실현해볼 수 있는 공간입니다
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style>
footer {
	background-color: var(--primary-light4);
	padding: 40px 0;
	color: var(--cool-gray600);
}
footer .container {
	display: flex;
	gap: 0 64px;
}
.footer__title {
	font-size: 14px;
	font-weight: 700;
}
.footer__paragraph {
	font-size: 14px;
	font-weight: 400;
	line-height: 140%;
	margin-top: 8px;
}
@media screen and (max-width: 767px) {
	footer {
		padding: 24px 0;
	}
	footer .container {
		gap: 0 32px;
	}
}
</style>
