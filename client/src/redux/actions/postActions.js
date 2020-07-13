import axios from 'axios';
import { setAlert } from '../actions/alertActions';
import {
	// CREATE_POST,
	GET_ALL_POSTS,
	GET_SINGLE_POST,
	GET_USER_POSTS,
	// GET_HERO_POST,
	// GET_POST,
	// GET_HERO_SIDE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	GET_SEARCHED_POST,
} from './types';
export const createPost = (formData) => async (dispatch) => {
	try {
		// console.log(formData.values());
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const res = await axios.post('/posts/create', formData, config);
		console.log(res.data);
	} catch (err) {
		console.log(err);
	}
};
export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios('posts/');
		dispatch({ type: GET_ALL_POSTS, payload: res.data });
	} catch (err) {
		throw err;
	}
};

export const getSinglePost = (id) => async (dispatch) => {
	try {
		const res = await axios(`/posts/${id}`);
		dispatch({ type: GET_SINGLE_POST, payload: res.data });
	} catch (err) {
		throw err;
	}
};

export const addComment = (postId, comment) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify(comment);
	try {
		const res = await axios.post(`/comment/add/${postId}`, body, config);
		dispatch({ type: ADD_COMMENT, payload: res.data });
		dispatch(setAlert('Comment successfully added', 'success'));
	} catch (err) {
		console.log(err);
	}
};

export const deleteComment = (post_id, comment_id) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	try {
		const res = await axios.delete(
			`/comment/delete/${post_id}/${comment_id}`,
			config
		);
		dispatch({ type: DELETE_COMMENT, payload: res.data });
		dispatch(setAlert('Comment successfully deleted', 'success'));
		// console.log(res.data);
	} catch (err) {
		console.log(err);
	}
};

//get all users posts
export const getUserPosts = () => async (dispatch) => {
	try {
		const res = await axios('/posts/user-posts/');
		dispatch({
			type: GET_USER_POSTS,
			payload: res.data,
		});
	} catch (err) {}
};

// delete user post
export const deleteUserPost = (post_id) => async (dispatch) => {
	console.log(post_id);
	try {
		const res = await axios.delete(`/posts/user-posts/${post_id}`);
		dispatch(getUserPosts());
		dispatch(setAlert(`${res.data.msg}`, 'success'));
	} catch (err) {
		console.log(err);
	}
};

export const editUserPost = (formData, postId) => async (dispatch) => {
	// console.log('Form data');
	try {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		const res = await axios.put(`/posts/edit-post/${postId}`, formData, config);
		console.log(res.data);
		dispatch(setAlert(`${res.data.msg}`, 'success'));
		dispatch(getSinglePost(postId));
	} catch (err) {
		console.log(err);
	}
};

//search post
export const getSearchResult = (query) => async (dispatch) => {
	try {
		const res = await axios(`/profile/search/${query}`);
		dispatch({ type: GET_SEARCHED_POST, payload: res.data });
	} catch (error) {
		console.log(error);
	}
};
