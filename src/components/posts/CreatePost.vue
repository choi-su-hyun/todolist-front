<template>
	<div class="container--md mobile-padding">
		<form class="input__background" @submit.prevent="createForm">
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
import { createTodo } from '@/api/post';
export default {
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
			return this.todoTitle.length < 30 && this.todoTitle.length > 0;
		},
		paragraphCount() {
			return this.todoDetail.length < 60 && this.todoDetail.length > 0;
		},
	},
	methods: {
		createForm() {
			let todo = {
				todoTitle: this.todoTitle,
				todoDetail: this.todoDetail,
			};
			createTodo(todo);
			this.$router.push('/list');
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
