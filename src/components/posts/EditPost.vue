<template>
	<div class="container--md">
		<form class="input__background" @submit.prevent="editForm">
			<div class="input-wrap mobile-grid">
				<label for="title">할 일</label>
				<input
					class="input"
					type="text"
					name="title"
					v-model="todoTitle"
					placeholder="오늘의 해야할 일을 작성해주세요."
					@input="doTitleCheck"
				/>
				<div></div>
				<p class="input__error-text" v-show="titleCheckData">
					{{ titleLogMessage }}
				</p>
			</div>
			<div class="input-wrap mobile-grid">
				<label for="paragraph">설명</label>
				<textarea
					class="input textarea"
					name="paragraph"
					v-model="todoDetail"
					id=""
					cols="30"
					rows="10"
					placeholder="할 일에 대한 간단한 설명을 작성해주세요"
					@input="doParagraphCheck"
				></textarea>
				<div></div>
				<p class="input__error-text" v-show="paragraphCheckData">
					{{ paragraphLogMessage }}
				</p>
			</div>
			<div class="btn-wrapper">
				<input
					class="block-btn--cta block-btn--md-cta"
					type="submit"
					value="작성 완료"
					:disabled="!titleCount || !paragraphCount"
				/>
			</div>
		</form>
	</div>
</template>

<script>
import { getPost, editTodo } from '@/api/post';
export default {
	// props: {
	// 	postItem: {
	// 		type: Object,
	// 	},
	// },
	data() {
		return {
			todoTitle: '',
			todoDetail: '',
			// log message
			titleLogMessage: '',
			titleCheckData: false,
			paragraphLogMessage: '',
			paragraphCheckData: false,
		};
	},
	computed: {
		titleCount() {
			return this.todoTitle.length > 0 && this.todoTitle.length < 30;
		},
		paragraphCount() {
			return this.todoTitle.length > 0 && this.todoTitle.length < 60;
		},
	},
	methods: {
		editForm() {
			try {
				let todo = {
					todoTitle: this.todoTitle,
					todoDetail: this.todoDetail,
				};
				editTodo(this.$route.params.id, todo);
				this.$router.push('/list');
			} catch (error) {
				console.log(error);
			}
		},
		async editStart() {
			let { data } = await getPost(this.$route.params.id);
			console.log(data);
			this.todoTitle = data.updateData.title;
			this.todoDetail = data.updateData.paragraph;
		},
		doTitleCheck() {
			if (this.todoTitle === '') {
				this.titleCheckData = true;
				this.titleLogMessage = '제목이 없습니다.';
			} else if (!this.titleCount) {
				this.titleCheckData = true;
				this.titleLogMessage = '제목은 30자 아래로 작성해주세요.';
			} else {
				this.titleCheckData = false;
			}
		},
		doParagraphCheck() {
			if (this.todoDetail === '') {
				this.paragraphCheckData = true;
				this.paragraphLogMessage = '본문이 없습니다.';
			} else if (!this.paragraphCount) {
				this.paragraphCheckData = true;
				this.paragraphLogMessage = '본문은 60자 아래로 작성해주세요.';
			} else {
				this.paragraphCheckData = false;
			}
		},
	},
	created() {
		this.editStart();
		// console.log('getPost 결과', await getPost(this.$route.params.id));
	},
};
</script>

<style>
.input__background {
	margin-top: 60px;
}
.container--md {
	margin-bottom: 360px;
}
.btn-wrapper {
	text-align: right;
}
@media screen and (max-width: 767px) {
	.input-wrap.mobile-grid {
		grid-template-columns: 1fr;
		gap: 8px 0;
	}
	.container--md {
		margin-bottom: 80px;
	}
	.input__background {
		margin-top: 40px;
	}
	.container--md.mobile-padding {
		padding: 0;
	}
}
</style>
