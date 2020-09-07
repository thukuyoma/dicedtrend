import {
	REGISTER_SUCCESS,
	AUTH_ERROR,
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
export const register = (values) => async (dispatch) => {
	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	};
	const { password, email, name } = values;
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
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: AUTH_ERROR,
		});
	}
};

//Login User
export const login = (values) => async (dispatch) => {
	const config = {
		headers: {
			'Content-type': 'application/json',
		},
	};
	const { password, email } = values;
	const body = JSON.stringify({ email, password });

	try {
		const res = await axios.post('auth/login', body, config);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data,
		});
		dispatch(loadUser());
		console.log(res.data);
		console.log(body);
		dispatch(setAlert(`${email} has successfully logged in`, 'success'));
	} catch (err) {
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: AUTH_ERROR,
		});
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
	try {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		const res = await axios('/auth/update-avatar', config, formData);
		dispatch({ type: UPDATE_AVATAR, payload: res.data });
		dispatch(
			setAlert('You have successfuly updated your profile picture', 'success')
		);
	} catch (err) {
		throw err;
	}
};

//forgot password
export const forgotPassword = (values) => async (dispatch) => {
	const email = values.email;
	const body = JSON.stringify({ email });
	try {
		const config = {
			headers: {
				'Content-type': 'application/json',
			},
		};
		const res = await axios.put('/auth/forgot-password', body, config);
		dispatch(setAlert(`${res.data}`, 'success'));
		console.log(res.data);
	} catch (err) {
		throw err;
	}
};
