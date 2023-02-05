import axios from 'axios';
import { setInterceptor } from './common/interceptor';

//axios 인스턴스 화
function createAxios() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
}

function createInterceptor() {
	let instance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});

	return setInterceptor(instance);
}

const instance = createAxios();
const post = createInterceptor();

export { instance, post };
