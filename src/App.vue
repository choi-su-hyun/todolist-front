<template>
	<div id="app">
		<AppHeader></AppHeader>
		<router-view></router-view>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';

export default {
	name: 'App',
	components: {
		AppHeader,
		AppFooter,
	},
};
</script>

<style>
@import url('../src/css/public.css');
@font-face {
	font-family: 'Pretendard-Regular';
	src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
		format('woff');
	font-weight: 400;
	font-style: normal;
}
#app {
	margin: 0 auto;
	font-family: 'Pretendard-Regular';
}
</style>
