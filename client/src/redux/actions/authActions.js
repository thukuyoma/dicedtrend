import {
	REGISTER_SUCCESS,
	LOGIN_SUCCESS,
	USER_LOADED,
	LOGOUT_USER,
	UPDATE_AVATAR,
} from './types';
import axios from 'axios';
import { setAlert } from './alertActions';

//load User
export const loadUser = () => async (dispatch) => {
	try {
		const res = await axios.get('auth/user');
		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		throw err;
	}
};

// Register User
export const register = (name, email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify({ name, email, password });
	try {
		const res = await axios.post('auth/register', body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
		dispatch(setAlert(`${email} registration successful`, 'success'));
	} catch (err) {
		throw err;
	}
};

//Login User
export const login = (email, password) => async (dispatch) => {
	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	};
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('auth/login', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
		dispatch(setAlert(`${email} has successfully logged in`, 'success'));
	} catch (err) {
		throw err;
	}
};


//logout
export const logout = () => (dispatch) => {
	dispatch(loadUser());
	dispatch({ type: LOGOUT_USER });
	dispatch(setAlert('You are now logged out', 'success'));
};


//update profile avatar
export const updateAvatar = (formData) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};
	try {
		const res = await axios('/auth/update-avatar', config, formData);
		dispatch({ type: UPDATE_AVATAR, payload: res.data });
		dispatch(
			setAlert('You have successfuly updated your profile picture', 'success')
		);
	} catch (err) {
		throw err;
	}
};
