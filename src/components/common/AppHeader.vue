<template>
	<header>
		<div class="container">
			<div>
				<a href="http://localhost:8080/">
					<img src="@/assets/logo--default.png" alt="" />
				</a>
			</div>
			<nav>
				<template v-if="isLogined">
					<a href="javascript:;" class="header__menu-btn" @click="logout"
						>로그아웃</a
					>
				</template>
				<template v-else>
					<router-link to="/login" class="header__menu-btn">로그인</router-link>
					<router-link to="/signup" class="header__menu-btn"
						>회원가입</router-link
					>
				</template>
			</nav>
		</div>
	</header>
</template>

<script>
import { deleteCookie } from '@/utils/cookie';
export default {
	data() {
		return {};
	},
	computed: {
		isLogined() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logout() {
			this.$store.state.nickName = '';
			this.$store.state.token = '';
			deleteCookie('token');
			deleteCookie('nickName');
			this.$router.push('/welcome').catch(() => {});
		},
	},
};
</script>

<style>
header .container {
	display: flex;
	justify-content: space-between;
	align-content: center;
	padding: 16px;
	max-width: 1128px;
}
header nav {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0 40px;
}
.header__menu-btn {
	color: var(--cool-gray900);
}
.header__menu-btn:hover {
	color: var(--secondary);
}
</style>
