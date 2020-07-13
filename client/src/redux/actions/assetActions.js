import { SHOW_SEARCH } from './types';
import axios from 'axios';
import { setAlert } from './alertActions';

export const showSearchBox = () => (dispatch) => {
	dispatch({ type: SHOW_SEARCH });
};

export const addSubscriber = (email) => async (dispatch) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const res = await axios.post('/mailer/newsletter', { email }, config);
		console.log(res.data);
		dispatch(setAlert(`check ${email} to verify your email`, 'success'));
	} catch (err) {
		console.log(err)
		// const errors = err.response.data.errors;
		// console.log(errors);
		// if (errors) {
		// 	errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		// }
	}
};
