import { useState } from 'react';
import { useDispatch } from 'react-redux';
import letterCounter from './letterCounter';

export default function usePostForm(callback, validate, initialState) {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [counter, setCounter] = useState({});

	const dispatch = useDispatch();

	const onChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
        // setCounter(letterCounter(values, errors));
        // setErrors(lett)
	};

	const handleFileChange = (e) => {
		setValues({
			preview: URL.createObjectURL(e.target.files[0]),
			raw: e.target.files[0],
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (Object.keys(validate(values)).length === 0) {
			const formData = new FormData();
			Object.keys(values).forEach((key) => formData.append(key, values[key]));
			dispatch(callback(formData));
		} else {
			setErrors(validate(values));
			console.log(errors);
		}
	};
	return { onSubmit, onChange, handleFileChange, values, errors, counter };
}
