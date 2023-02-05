import { post } from '@/api/index';

// 리스트 가져오기
function getList() {
	return post.get('api/post');
}

// 특정 글 가져오기
function getPost(todoId) {
	return post.get(`api/post/edit/${todoId}`);
}

// 수정하기
function editTodo(todoId, editData) {
	return post.put(`api/post/edit/${todoId}/update_process`, editData);
}

// 생성
function createTodo(todo) {
	return post.post('api/post/create_process', todo);
}

// 글 삭제
function deleteTodo(todoId) {
	return post.delete(`api/post/delete/${todoId}`);
}

export { getList, getPost, editTodo, createTodo, deleteTodo };
