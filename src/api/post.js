import { post } from '@/api/index';

// 리스트 가져오기
function getList() {
	return post.get('/post');
}

// 특정 글 가져오기
function getPost(todoId) {
	return post.get(`/post/edit/${todoId}`);
}

// 수정하기
function editTodo(todoId, editData) {
	return post.put(`/post/edit/${todoId}/update-process`, editData);
}

// 생성
function createTodo(todo) {
	return post.post('/post/create-process', todo);
}

// 글 삭제
function deleteTodo(todoId) {
	return post.delete(`/post/delete/${todoId}`);
}

export { getList, getPost, editTodo, createTodo, deleteTodo };
