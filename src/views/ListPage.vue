<template>
	<div class="container--md">
		<h2 class="page-content__sub-title">{{ nowDate.fullDate }}</h2>
		<h1 class="page-content__title">
			<span class="secondary-text">'{{ userName }}'</span> 님의 오늘 할 일
		</h1>
		<div class="bubble">
			<div class="bubble__tail">
				<img src="@/assets/bubble__tail.svg" />
			</div>
			<div class="bubble__back">
				<p class="bubble__back-text">
					{{ userName }} 님! 좋은
					<span class="bubble__day-text">{{ nowDate.day }}요일</span
					>입니다!<br />
					오늘도 화이팅!
				</p>
			</div>
		</div>
		<div class="btn-wrapper">
			<router-link class="block-btn--cta have-icon" to="/create">
				<img
					class="btn-icon have-text"
					src="@/assets/document-add.svg"
					alt=""
				/>
				할일 추가하기
			</router-link>
		</div>
		<template v-if="isLoading">
			<LoadingSpin></LoadingSpin>
		</template>
		<template v-else>
			<template v-if="isDatas">
				<ListPost
					v-for="postItem in postItems"
					:key="postItem.id"
					:postItem="postItem"
					@refresh="getListStart"
					@deleteUp="openPopup"
				></ListPost>
			</template>
			<template v-else>
				<NotDatas></NotDatas>
			</template>
		</template>
		<div class="popup" v-show="deleteAlert">
			<div class="popup__back" @click="deletePopupClose"></div>
			<div class="popup__content">
				<h4 class="popup__title">글 삭제</h4>
				<p class="popup__paragraph">
					<span class="secondary-text">'{{ todoTitle }}'</span> 할 일을 정말
					삭제하시겠습니까?
				</p>
				<div class="popup__btn-wrap">
					<button class="block-btn--cancel" @click="deletePopupClose">
						취소
					</button>
					<button class="block-btn--cta" @click="goDelete">삭제</button>
				</div>
			</div>
		</div>
		<div class="btn-wrapper--center">
			<router-link class="block-btn--circle-cta have-icon" to="/create">
				<img class="btn-icon" src="@/assets/plus-btn.svg" alt="" />
			</router-link>
		</div>
	</div>
</template>

<script>
import ListPost from '@/components/posts/ListPost.vue';
import NotDatas from '@/components/NotDatas.vue';
import LoadingSpin from '@/components/common/LoadingSpin.vue';
import { getList, deleteTodo } from '@/api/post';

import { getDate } from '@/utils/date';

export default {
	components: {
		ListPost,
		NotDatas,
		LoadingSpin,
	},
	data() {
		return {
			userName: '',
			nowDate: {
				year: '',
				month: '',
				day: '',
				date: '',
				fullDate: '',
			},
			isDatas: true,
			postItems: [],

			// loading
			isLoading: false,

			// 이벤트 내용
			deleteAlert: false,
			todoTitle: '',
			todoId: '',
		};
	},
	methods: {
		async getListStart() {
			this.isLoading = true;
			let { data } = await getList();
			// console.log('get list', data);
			// console.log('data.todoData', data.todoData);
			// console.log('data.todoData.length', data.todoData.length);
			this.userName = data.userName;
			this.isLoading = false;
			if (data.todoData.length) {
				this.postItems = data.todoData;
				this.isDatas = true;
			} else {
				this.isDatas = false;
			}
		},
		now() {
			this.nowDate.year = getDate().year;
			this.nowDate.month = getDate().month;
			this.nowDate.day = getDate().day;
			this.nowDate.date = getDate().date;
			this.nowDate.fullDate = getDate().fullDate;
		},
		openPopup(data) {
			// console.log('넘어온 이벤트 자료', data);
			this.deleteAlert = true;
			this.todoTitle = data.deleteData.title;
			this.todoId = data.deleteData.id;
		},
		deletePopupClose() {
			this.deleteAlert = false;
		},
		async goDelete() {
			await deleteTodo(this.todoId);
			this.getListStart();
			this.deleteAlert = false;
			// this.deleteDataInit();
		},
		deleteDataInit() {
			this.todoTitle = '';
			this.todoId = '';
		},
	},
	created() {
		this.getListStart();
		this.now();
		setInterval(this.now, 1000);
		// console.log(this.day);
	},
};
</script>

<style>
.page-content__title,
.page-content__sub-title {
	text-align: center;
}
.page-content__sub-title {
	padding-top: 80px;
}
.bubble {
	margin: 32px 0;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.bubble__tail img {
	display: block;
}
.bubble__back {
	padding: 16px 24px;
	border-radius: 8px;
	background-color: var(--primary-light4);
}
.bubble__back-text {
	font-size: 16px;
	line-height: 150%;
	color: var(--cool-gray800);
	text-align: center;
}
.bubble__day-text {
	font-weight: 700;
	/* box-shadow: inset 100px 20px var(--secondary); */
	background-color: var(--secondary);
}
.btn-wrapper {
	text-align: right;
}
.btn-wrapper--center {
	display: flex;
	justify-content: center;
	margin: 48px 0 240px;
}
.popup {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	/* z-index: 10; */
	display: flex;
	justify-content: center;
	align-items: center;
}
.popup__back {
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.4);
	z-index: 5;
}
.popup__title {
	font-size: 24px;
	color: var(--cool-gray800);
	text-align: center;
}
.popup__paragraph {
	color: var(--cool-gray600);
	margin-top: 16px;
}
.popup__content {
	background-color: white;
	border-radius: 8px;
	padding: 24px 40px;
	z-index: 15;
}
.popup__btn-wrap {
	display: flex;
	justify-content: space-between;
	gap: 24px;
	margin-top: 40px;
}
.popup__btn-wrap button {
	width: 100%;
}
@media screen and (max-width: 767px) {
	.bubble {
		margin: 24px 0 40px;
	}
	.btn-wrapper--center {
		margin: 40px 0;
	}
}
</style>
