<template>
	<div class="list-item-wrapper">
		<div class="list-item-tools">
			<button class="btn-tool" @click="goEdit">
				<EditBtn
					iconColor="var(--cool-gray800)"
					iconHoverColor="white"
				></EditBtn>
			</button>
			<img
				class="tool-separator"
				src="@/assets/tool-btn-separator.svg"
				alt=""
			/>
			<button class="btn-tool" @click="deletePopupStart">
				<DeleteBtn
					iconColor="var(--cool-gray800)"
					iconHoverColor="white"
				></DeleteBtn>
			</button>
		</div>
		<li class="list-item">
			<div class="list-item__title-wrap">
				<div class="list-item__stick-wrap">
					<div class="list-item__title-stick"></div>
					<h3 class="list-item__title">{{ postItem.title }}</h3>
				</div>
				<span class="list-item__date">{{ postItem.created | formatDate }}</span>
			</div>
			<div class="list-item__paragraph-wrap">
				<p class="list-item__paragraph">{{ postItem.paragraph }}</p>
			</div>
		</li>
	</div>
</template>

<script>
import EditBtn from '@/assets/EditBtn.vue';
import DeleteBtn from '@/assets/DeleteBtn.vue';
export default {
	components: {
		EditBtn,
		DeleteBtn,
	},
	data() {
		return {};
	},
	props: {
		postItem: {
			type: Object,
		},
	},
	methods: {
		goEdit() {
			this.$router.push(`/edit/${this.postItem.id}`);
		},
		deletePopupStart() {
			let deleteDatas = {
				deleteData: this.postItem,
			};
			this.$emit('deleteUp', deleteDatas);
		},
	},
};
</script>

<style>
.list-item-wrapper {
	position: relative;
	display: flex;
	justify-content: center;
}
.list-item-wrapper:last-child {
	margin-bottom: 240px;
}
.list-item {
	position: relative;
	width: 100%;
	padding: 24px 32px;
	/* margin-top: 56px; */
	background-color: white;
	box-shadow: 0px 14px 92px rgba(114, 117, 121, 0.07),
		0px 9.89523px 33.5815px rgba(114, 117, 121, 0.0341113),
		0px 9.39146px 16.3032px rgba(114, 117, 121, 0.0192266),
		0px 9.1593px 7.99213px rgba(114, 117, 121, 0.0103137),
		0px 8.17893px 3.1601px rgba(114, 117, 121, 0.0042981);
	border-radius: 8px;
	list-style-type: none;
	z-index: 2;
}
.list-item__title-wrap {
	display: flex;
	justify-content: space-between;
}
.list-item__title {
	font-size: 20px;
	color: var(--cool-gray800);
}
.list-item__title-stick {
	width: 4px;
	height: 24px;
	background-color: var(--primary);
	border-radius: 2px;
}
.list-item__stick-wrap {
	display: flex;
	gap: 8px;
}
.list-item__date {
	font-size: 14px;
	color: var(--cool-gray500);
}
.list-item__paragraph-wrap {
	background-color: var(--primary-light5);
	margin-top: 8px;
}
.list-item__paragraph {
	padding: 16px;
	font-size: 16px;
	color: var(--cool-gray600);
}
.list-item-tools {
	position: absolute;
	top: -8px;
	background-color: var(--primary);
	padding: 8px 24px;
	border-radius: 8px 8px 0 0;
	z-index: 0;
	transition: all 0.5s ease-in-out;
}
.list-item-tools:hover {
	top: -48px;
}
.list-item-wrapper {
	margin-top: 56px;
}
.list-item-wrapper:hover .list-item-tools {
	top: -48px;
}
.tool-separator {
	padding: 0 16px;
}
</style>
