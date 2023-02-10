<template>
	<form class="signup-form" v-on:submit.prevent="signupForm">
		<div class="form-wrap">
			<div>
				<div class="form-sub-text">
					<h3>로그인 정보</h3>
					<span>(로그인을 위해 생성할 계정정보를 입력하세요)</span>
				</div>
				<div class="input__background have-btn--center">
					<div class="input-wrap">
						<label for="">아이디</label>
						<div class="input-wrap--have-id-check">
							<input
								class="input"
								type="text"
								placeholder="아이디"
								v-model="user_id"
								@input="inputIdChecking"
								required
							/>
							<form v-on:submit.prevent="idCheckForm">
								<input type="hidden" />
								<input
									type="submit"
									class="block-btn--cta block-btn--sm-cta"
									value="아이디 중복 체크"
									v-bind:disabled="!this.user_id"
								/>
							</form>
						</div>
						<div></div>
						<p
							class="guide_text"
							v-bind:class="{ success: canUse, error: cannotUse }"
						>
							{{ CanUseMessage }}
						</p>
					</div>
					<div class="input-wrap">
						<label for="">비밀번호</label>
						<div>
							<input
								class="input"
								type="password"
								placeholder="비밀번호"
								v-model="password"
								required
							/>
						</div>
					</div>
					<div class="input-wrap">
						<label for="">비밀번호 확인</label>
						<div>
							<input
								class="input"
								type="password"
								placeholder="비밀번호 확인"
								v-model="passwordConfirm"
								required
							/>
							<p class="input__error-text" v-show="!passwordCheck">
								비밀번호가 달라요.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div class="form-sub-text">
					<h3>회원 정보</h3>
					<span>(회원 관리를 위해 사용됩니다)</span>
				</div>
				<div class="input__background have-btn--center">
					<div class="input-wrap">
						<label for="">이름</label>
						<div>
							<input
								class="input"
								type="text"
								placeholder="이름"
								v-model="name"
								required
							/>
						</div>
					</div>
					<div class="input-wrap">
						<label for="">이메일</label>
						<div>
							<input
								class="input"
								type="text"
								placeholder="이메일"
								v-model="email"
								required
							/>
							<p class="input__error-text" v-show="!emailCheckConfirm">
								이메일 형식이 아닙니다.
							</p>
						</div>
					</div>
				</div>
			</div>
			<button
				class="block-btn--cta"
				type="submit"
				v-bind:disabled="
					!emailCheck ||
					!user_id ||
					!password ||
					!name ||
					!email ||
					!passwordCheck ||
					cannotUse ||
					!idChecked
				"
			>
				회원가입 하기
			</button>
		</div>
	</form>
</template>

<script>
import { validateEmail } from '@/utils/checkValid';
import { registerUser, idCheck } from '@/api/auth';
export default {
	data() {
		return {
			user_id: '',
			password: '',
			passwordConfirm: '',
			name: '',
			email: '',

			// 아이디 중복확인
			CanUseMessage: '',
			canUse: true,
			cannotUse: true,
			idChecked: false,
		};
	},
	computed: {
		emailCheck() {
			return validateEmail(this.email);
		},
		emailCheckConfirm() {
			if (this.email !== '' && this.emailCheck === false) {
				return false;
			} else {
				return true;
			}
		},
		passwordCheck() {
			if (this.password === this.passwordConfirm) {
				return true;
			} else if (this.password === '') {
				return true;
			} else {
				return false;
			}
		},
	},
	methods: {
		async signupForm() {
			const userData = {
				user_id: this.user_id,
				password: this.password,
				name: this.name,
				email: this.email,
			};
			await registerUser(userData);
			this.$router.push('/login');
			console.log(userData);
		},
		// passwordValidationFailed(message) {
		// 	// 패스워드
		// },
		idValidationFailed(message) {
			this.canUse = false;
			this.cannotUse = true;
			this.CanUseMessage = message;
		},
		IdValidationSuccess(message) {
			this.canUse = true;
			this.cannotUse = false;
			this.CanUseMessage = message;
		},
		async idCheckForm() {
			const loginId = { checkingId: this.user_id };
			// await idCheck(loginId);
			console.log(await idCheck(loginId));

			const idChecked = await idCheck(loginId);
			if (idChecked.success) {
				this.IdValidationSuccess(idChecked.message);
				this.idChecked = true;
			} else {
				this.idValidationFailed(idChecked.message);
			}
		},
		inputIdChecking() {
			this.idChecked = false;
			this.cannotUse = true;
			this.CanUseMessage = '오른쪽의 아이디 중복 체크 해주세요.';
		},
	},
};
</script>

<style>
.signup-form {
	margin-top: 56px;
}
.form-sub-text {
	display: flex;
	align-items: baseline;
	gap: 0 8px;
}
.form-sub-text h3 {
	font-size: 24px;
	color: var(--cool-gray700);
}
.form-sub-text span {
	font-size: 14px;
	color: var(--cool-gray600);
}
.input__background {
	margin-top: 16px;
}
.form-wrap {
	display: flex;
	flex-direction: column;
	gap: 40px 0;
}
@media screen and (max-width: 767px) {
	.form-sub-text {
		flex-direction: column;
		gap: 8px;
	}
}
</style>
