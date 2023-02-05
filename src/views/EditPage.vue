<template>
	<div class="container--md">
		<h2 class="page-content__sub-title text-center">{{ fullDate }}</h2>
		<h1 class="page-content__title text-center">나의 할일 수정하기</h1>
		<EditPost></EditPost>
	</div>
</template>

<script>
import { getDate } from '@/utils/date';
import EditPost from '@/components/posts/EditPost.vue';
export default {
	components: {
		EditPost,
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
		setInterval(this.now, 1000);
	},
};
</script>

<style>
.page-content__sub-title {
	padding-top: 80px;
}
</style>
