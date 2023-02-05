<template>
	<div class="container--md">
		<h2 class="page-content__sub-title text-center">{{ fullDate }}</h2>
		<h1 class="page-content__title text-center">
			오늘 해야할 일이 <span class="in-block">있으신가요?</span>
		</h1>
		<CreatePost></CreatePost>
	</div>
</template>

<script>
import { getDate } from '@/utils/date';
import CreatePost from '@/components/posts/CreatePost.vue';
export default {
	components: {
		CreatePost,
	},
	data() {
		return {
			fullDate: '',
		};
	},
	methods: {
		now() {
			this.fullDate = getDate().fullDate;
		},
	},
	created() {
		this.now();
		setInterval(this.now, 1000);
	},
};
</script>

<style>
.page-content__sub-title {
	padding-top: 80px;
}
</style>
