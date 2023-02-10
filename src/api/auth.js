import { instance } from '@/api/index';
import catchErrorHandler from '@/catch-error';
import { store } from '@/store/store';
import { setCookie } from '@/utils/cookie';

// 회원가입 api
async function registerUser(userData) {
	try {
		const axiosRequest = await instance.post('/users/signup-process', userData);
		const result = axiosRequest.data;
		// parser
		return result;
	} catch (error) {
		console.log(error);
	}
}

// 회원가입 아이디 중복 체크 api
async function idCheck(userId) {
	try {
		const checkDuplicatedId = await instance.post(
			'/users/id-check-process',
			userId,
		);
		const result = {
			message: '사용가능한 아이디입니다.',
			success: true,
		};
		return result;
	} catch (error) {
		// throw error;
		// errorCode, errorMessage
		if (error.response.data.message === 'EXIST_ID') {
			// throw error;
			// alert('이미 사용중인 아이디입니다.');
			const result = {
				message: '이미 사용중인 아이디입니다.',
				success: false,
			};
			return result;
		}
		if (error.response.data.message === 'TOO_LONG_ID') {
			// alert('아이디가 너무 짧아.');
			// throw error;
			const result = {
				message: '아이디는 8자이하로 작성해주세요.',
				success: false,
			};
			return result;
		}
		// catchErrorHandler(error);
	}
}

//로그인 api
async function loginUser(userData) {
	try {
		const loginData = await instance.post('/users/login-process', userData);
		store.state.nickName = loginData.data.nickName;
		store.state.token = loginData.data.token;
		// 쿠키에 저장
		setCookie('nickName', loginData.data.nickName);
		setCookie('token', loginData.data.token);
		const result = {
			successStatus: true,
		};
		return result;
	} catch (error) {
		if (error.response.data.message === 'ID_NOTHING') {
			const result = {
				successStatus: false,
				message: '존재하지 않는 아이디입니다.',
			};
			return result;
		}
		if (error.response.data.message === 'PASSWORD_NOT_MATCHED') {
			const result = {
				successStatus: false,
				message: '비밀번호가 일치하지 않습니다.',
			};
			return result;
		}
	}
}

export { registerUser, idCheck, loginUser };
