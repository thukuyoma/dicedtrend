import {
	GET_ALL_POSTS,
	GET_SINGLE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	GET_USER_POSTS,
	GET_SEARCHED_POST,
} from '../actions/types';

const initialState = {
	posts: [],
	post: null,
	searchedPosts: null,
	userPosts: [],
	loading: true,
	error: {},
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case GET_ALL_POSTS:
			return { ...state, posts: payload, loading: false };

		case GET_SINGLE_POST:
			return { ...state, post: payload, loading: false };

		case GET_USER_POSTS:
			return {
				...state,
				loading: false,
				userPosts: payload,
			};

		case ADD_COMMENT:
			return {
				...state,
				post: { ...state.post, comments: payload },
				loading: false,
			};

		case DELETE_COMMENT:
			return {
				...state,
				post: { ...state.post, comments: payload },
				loading: false,
			};

		case GET_SEARCHED_POST:
			return { ...state, searchedPosts: payload, loading: false };
		default:
			return state;
	}
}
