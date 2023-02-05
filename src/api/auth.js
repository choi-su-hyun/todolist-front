import { instance } from '@/api/index';

// 회원가입 api
function registerUser(userData) {
	return instance.post('api/users/signup_process', userData);
}

// 회원가입 아이디 중복 체크 api
function idCheck(userId) {
	return instance.post('api/users/idCheck_process', userId);
}

//로그인 api
function loginUser(userData) {
	return instance.post('api/users/login_process', userData);
}

export { registerUser, idCheck, loginUser };
