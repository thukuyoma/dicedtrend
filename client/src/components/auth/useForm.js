import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function useForm(callback, validate, initialState) {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [buttonLoading, setButtonLoading] = useState(false);
	const dispatch = useDispatch();
	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (Object.keys(validate(values)).length === 0) {
			dispatch(callback(values));
			setButtonLoading(true);
		} else {
			setErrors(validate(values));
		}
	};

	return { values, errors, buttonLoading, onChange, onSubmit };
}
