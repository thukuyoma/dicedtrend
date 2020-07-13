import {
	REGISTER_SUCCESS,
	LOGIN_SUCCESS,
	USER_LOADED,
	LOGOUT_USER,
} from '../actions/types';

const initialState = {
	isAuthenticated: false,
	isUserLoaded: false,
	user: null,
	token: localStorage.getItem('token'),
};

export default function (state = initialState, { type, payload }) {
	switch (type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				...payload,
				isAuthenticated: true,
			};
		case USER_LOADED:
			return {
				...state,
				user: payload,
				isUserLoaded: true,
			};

		case LOGOUT_USER:
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
			};

		default:
			return state;
	}
}
