import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'react-uuid';

export const setAlert = (message, alertType) => (dispatch) => {
	const id = uuid();
	dispatch({ type: SET_ALERT, payload: { message, alertType, id } });
	setTimeout(() => {
		dispatch({ type: REMOVE_ALERT, payload: id });
	}, 5000);
};

export const removeAlert = (id) => (dispatch) => {
	// console.log(id, "hjsdjsd");
  // dispatch({ type: REMOVE_ALERT, payload: id });
};
